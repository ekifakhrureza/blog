const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title cannot be empty']
    },
    content: {
        type: String,
        required: [true, 'content cannot be empty']
    },

}, {
        timestamps: true
    })

let Article = mongoose.model('Article', articleSchema)

module.exports = Article
