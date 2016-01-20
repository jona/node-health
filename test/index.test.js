var nock = require('nock'),
    setup = require('./setup'),
    express = require('express'),
    request = require('supertest'),
    health = require('../index'),
    app;

describe('index', function(){
  describe('/health', function() {
    describe('when health route hit', function() {
      it('should return success', function(done) {
        app = express();
        app.use(health);

        request(app)
          .get('/health')
          .end(function(err, res){
            expect(res.statusCode).to.eql(200);
            expect(res.body).to.eql({status: 'ok'});
            done();
          });
      });
    });
  });
});
