// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Activity = require('../models/activity');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Activities', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    Activity.remove({}, (err) => {
      done();
    });
  });

  // Test the /GET route
  describe('/GET activity', () => {
    it('it should GET all the activities', (done) => {
      chai
        .request(server)
        .get('/activities')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
