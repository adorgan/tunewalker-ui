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
    { name: 'blogpost_hero_photo' },
    { name: 'blogpost_album_art_1' },
    { name: "blogpost_album_art_2" },
    { name: 'blogpost_coulda_shoulda_album_art_1' },
    { name: 'blogpost_coulda_shoulda_album_art_2' },
    { name: "blogpost_map" }
]), (req, res) => {

    console.log(req.body);
    console.log(req.files);

    const payload = req.body;
    payload["blogpost_album_art_1_details"] = JSON.parse(req.body["blogpost_album_art_1_details"]);
    payload["blogpost_album_art_2_details"] = JSON.parse(req.body["blogpost_album_art_2_details"]);
    payload["blogpost_map_details"] = JSON.parse(req.body["blogpost_map_details"]);
    payload["blogpost_coulda_shoulda_1_details"] = JSON.parse(req.body["blogpost_coulda_shoulda_1_details"]);
    payload["blogpost_coulda_shoulda_2_details"] = JSON.parse(req.body["blogpost_coulda_shoulda_2_details"]);
    
    
    payload["blogpost_hero_photo"] = req.files["blogpost_hero_photo"][0].location;
    payload["blogpost_album_art_1"] = req.files["blogpost_album_art_1"][0].location;
    payload["blogpost_album_art_2"] = req.files["blogpost_album_art_2"][0].location;
    payload["blogpost_coulda_shoulda_album_art_1"] = req.files["blogpost_coulda_shoulda_album_art_1"][0].location;
    payload["blogpost_coulda_shoulda_album_art_2"] = req.files["blogpost_coulda_shoulda_album_art_2"][0].location;
    payload["blogpost_map"] = req.files["blogpost_map"][0].location;

    const blogPost = new Blogpost(payload);
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