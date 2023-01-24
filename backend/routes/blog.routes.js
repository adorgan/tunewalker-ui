const express = require('express');
const router = express.Router();
const Blogpost = require('../models/blogpost.model');

router.get('/blogpost', (req, res) => {
    Blogpost.find({}, null, {sort: '-createdAt'}, (err, blogposts) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).json(blogposts);
        }
    });
})

router.get('/blogpost/:id', (req, res) => {
    Blogpost.findById(req.params.id, (err, blogpost) => {
        if (err) {
            res.status(404).send(err);
        }
        else {
            res.status(200).json(blogpost);
        }
    });
})

router.post('/blogpost', (req, res) => {
    const blogPost = new Blogpost(req.body);
    blogPost.save()
        .then((newBlogPost) => {
            res.status(200).json({
                'blogpost': 'added successfully',
                'id': newBlogPost._id
            });
        })
        .catch(err => {
            res.status(400).send('adding new blogpost failed');
        });

})

router.delete("/blogpost/:id", (req, res) => {
    Blogpost.findByIdAndRemove(req.params.id, (err, blogpost) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(blogpost);
        }
    });
});

router.put("/blogpost/:id", (req, res) => {

    Blogpost.findByIdAndUpdate(
        req.params.id,
        req.body.blogpost,
        {returnDocument: 'after'},
        (err, updatedBlogpost) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(updatedBlogpost);
            }
        }
    );
});

module.exports = router;