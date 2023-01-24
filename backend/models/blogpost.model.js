const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Blogpost = new Schema({
    blogpost_body: {
        type: String
    },
    blogpost_title: {
        type: String
    },
}, { timestamps: true });
module.exports = mongoose.model('Blogpost', Blogpost);