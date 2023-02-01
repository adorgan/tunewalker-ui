const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Blogpost = new Schema({
    blogpost_body: {
        type: String
    },
    blogpost_title: {
        type: String
    },
    blogpost_preview: {
        type: String
    },
    blogpost_photos: {
        type: Array
    },
    blogpost_album_art: {
        type: String
    }
}, { timestamps: true });
module.exports = mongoose.model('Blogpost', Blogpost);