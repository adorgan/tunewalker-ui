const express = require('express');
const router = express.Router();
const Blogpost = require('../models/blogpost.model');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { find } = require('lodash');

aws.config.update({
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    accessKeyId: process.env.ACCESS_KEY,
    region: 'us-east-2'
});

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        acl: 'public-read',
        bucket: process.env.BUCKET_NAME,
        key: function (req, file, cb) {
            // console.log(file);
            cb(null, Date.now() + file.originalname);
        }
    })
});

router.get('/blogpost', (req, res) => {
    Blogpost.find({}, null, { sort: '-createdAt' }, (err, blogposts) => {
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

router.post('/blogpost', upload.fields([
    { name: 'blogpost_photos[]' },
    { name: 'blogpost_album_art' }
]), (req, res) => {

    const imgArray = [];
    const filenamesArray = req.body['blogpost_filenames'].map((filename) => JSON.parse(filename))

    req.body['blogpost_captions'].forEach((caption) => {
        const captionObject = JSON.parse(caption);
        const filenameObjectMatch = find(filenamesArray, (o) => o.id === captionObject.id);
        const foundFile = find(req.files['blogpost_photos[]'], (o) => o.originalname === filenameObjectMatch.value);
        imgArray.push({
            photoURL: foundFile.location,
            caption: captionObject.value
        })

    })

    req.body.blogpost_photos = imgArray;
    req.body.blogpost_album_art = req.files['blogpost_album_art'][0].location;

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
            res.status(200).send('Successfully Deleted')
        }
    });
});

router.put("/blogpost/:id", (req, res) => {

    Blogpost.findByIdAndUpdate(
        req.params.id,
        req.body,
        { returnDocument: 'after' },
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