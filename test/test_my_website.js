var expect = require('chai').expect;
var request = require('request');

describe('Status and content', function(){
    describe('Main page', function() {
        it ('status', function(done) {
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/', function(error, response, body) {
                expect(body).to.contains('/images/fb_profile.jpg');
                expect(body).to.contains('/files/cv.pdf');
                done();
            });
        });
    });
});