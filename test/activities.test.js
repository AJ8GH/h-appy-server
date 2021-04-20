// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Activity = require('../app/models/activity');

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
    it('should GET all the activities', (done) => {
      chai
        .request(server)
        .get('/activities')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.nibbles.length.should.be.eql(0);
          response.body.appetisers.length.should.be.eql(0);
          response.body.mains.length.should.be.eql(0);
          response.body.desserts.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST activity', () => {
    const activity = {
      name: 'test',
      cost: 3,
      description: 'testtest',
      size: 'nibble',
      accessibility: 5,
      categories: ['testing']
    }

    it('accepts a POST request', (done) => {
      chai
        .request(server)
        .post('/activities')
        .send(activity)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.name.should.be.eql('test');
          response.body.cost.should.be.eql(3);
          response.body.accessibility.should.be.eql(5);
          response.body.size.should.be.eql('nibble');
          response.body.categories.includes('testing').should.be.eql(true);
          done();
        });
    });
  });
});
