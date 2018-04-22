var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);




describe('Add Article', function () {
    it('successfully add data articles', (done) => {
        chai.request(app)
            .post('/articles/add')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query add article success')
                expect(res.body).to.ownProperty('data')
                done()
            })
    })
});


describe('Get Article', function () {
    it('successfully get all articles', (done) => {
        chai.request(app)
            .get('/articles')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query get all articles success')
                expect(res.body).to.ownProperty('data')
                done()
            })
    })

});

describe('Update Article', function () {
    it('successfully update data articles', (done) => {
        chai.request(app)
            .put('/articles/update/:id')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query update article success')
                expect(res.body).to.ownProperty('data')
                done()

            })
    })
})

describe('Delete Article', function () {
    it('successfully delete data article', (done) => {
        chai.request(app)
            .del('/articles/delete/:id')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query delete article success')
                expect(res.body).to.ownProperty('data')
                done()

            })
    })
})

describe('Register User', function () {
    it('successfully register user', (done) => {
        chai.request(app)
            .post('/users/register')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query register user success')
                expect(res.body).to.ownProperty('data')
                done()

            })
    })
})

describe('Login', function () {
    it('successfully login user', (done) => {
        chai.request(app)
            .post('/users/login')
            .end((err, res) => {
                expect(err).to.be.null
                expect(res).to.have.status(200)
                expect(res.body).to.ownProperty('message').eql('query login user success')
                expect(res.body).to.ownProperty('data')
                done()

            })
    })
})