const Article = require('../models/article.model')
const jwt = require('jsonwebtoken')

module.exports = {
    getAll(req, res) {
        Article.find()
            .sort([['createdAt', -1]])
            .exec()
            .then(response => {
                res.status(200).json({
                    message: 'query get all articles success',
                    data: response
                })
            }).catch(err => {
                res.status(500).json({
                    message: 'query get all articles failed',
                    err
                })
            })
    },
    getOne: function (req, res) {
        Article.findById(req.params.id).exec().then(response => {
            res.status(200).json({
                message: 'success get data by id',
                data: response
            })
        }).catch(err => {
            res.status(500).json({
                message: 'get data by id failed',
                err
            })
        })
    },

    add(req, res) {
        console.log('asuippp serverrrr'+req.body.title);
        
        let title = req.body.title
        let content = req.body.content
        let newArticle = new Article({
            title: title,
            content: content
        })

        newArticle.save().then(response => {
            res.status(200).json({
                message: 'query add article success',
                data: response
            })
        }).catch(err => {
            message: 'query add article failed',
                err

        })
    },

    update(req, res) {
        console.log('titleeeeeeee '+req.body.title);
        let id = req.params.id
        let title = req.body.title
        let content = req.body.content
        console.log('ini tehhh iddd'+req.params.id);
        
        Article.update({ _id: id }, {
            $set: { title: title, content: content },

        }).then(response => {
            res.status(200).json({
                message: 'query update article success',
                data: response
            })
        }).catch(err => {
            message: 'query update article failed',
            err
        })
    },

    remove(req, res) {
        let id = req.params.id
        Article.findByIdAndRemove(id)
            .then(response => {
                res.status(200).json({
                    message: 'query delete article success',
                    data: response
                })
            }).catch(err => {
                message: 'query delete article success',
                    err
            })
    }


}