var expect = require('chai').expect;
var request = require('request');

const PORT = process.env.PORT || 8080;

describe('Status and content', function(){
    describe('Main page', function() {
        it ('status', function(done) {
            request(`http://localhost:${PORT}/`, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request(`http://localhost:${PORT}/`, function(error, response, body) {
                expect(body).to.contains('/images/fb_profile.jpg');
                expect(body).to.contains('/files/cv.pdf');
                done();
            });
        });

    });

    describe('Home page', function() {
        it ('status', function(done) {
            request(`http://localhost:${PORT}/html/home.html`, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('About page', function() {
        it ('status', function(done) {
            request(`http://localhost:${PORT}/html/certifications_info_page.html`, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
    });

    describe('Hobbies page', function() {
        it ('status', function(done) {
            request(`http://localhost:${PORT}/html/hobbies.html`, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
});
});