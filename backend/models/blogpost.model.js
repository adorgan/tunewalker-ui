const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Blogpost = new Schema({
    blogpost_album_1_rank: {
        type: String
    },
    blogpost_album_2_rank: {
        type: String
    },
    blogpost_title: {
        type: String
    },
    blogpost_intro: {
        type: String
    },
    blogpost_review_1: {
        type: String
    },
    blogpost_review_2: {
        type: String
    },
    blogpost_hero_photo: {
        type: String
    },
    blogpost_hero_photo_caption: {
        type: String
    },
    blogpost_album_art_1: {
        type: String
    },
    blogpost_album_art_2: {
        type: String
    },
    blogpost_album_art_1_details: {
        type: Object
    },
    blogpost_album_art_2_details: {
        type: Object
    },
    blogpost_map: {
        type: String
    },
    blogpost_map_details: {
        type: Object
    },
    blogpost_coulda_shoulda_album_art_1: {
        type: String
    },
    blogpost_coulda_shoulda_album_art_2: {
        type: String
    },
    blogpost_coulda_shoulda_1_details: {
        type: Object
    },
    blogpost_coulda_shoulda_2_details: {
        type: Object
    }
}, { timestamps: true });
module.exports = mongoose.model('Blogpost', Blogpost);