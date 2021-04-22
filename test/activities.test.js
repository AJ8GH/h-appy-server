// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const Activity = require('../app/models/activity');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

const activity = {
  name: 'test',
  cost: 0,
  description: 'testtest',
  size: 'nibble',
  accessibility: 5,
  categories: ['testing']
}

const activity1 = {
  name: 'test',
  cost: 2,
  description: 'testtest',
  size: 'appetiser',
  accessibility: 6,
  categories: ['testing1']
}

chai.use(chaiHttp);
//Our parent block
describe('Activities', () => {
  const activity0 = {
    name: 'test',
    cost: 0,
    description: 'testtest',
    size: 'nibble',
    accessibility: 5,
    categories: ['testing']
  }

  const activity1 = {
    name: 'test',
    cost: 1,
    description: 'testtest',
    size: 'appetiser',
    accessibility: 6,
    categories: ['testing1']
  }

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
          response.body.nibbles.length.should.be.eql(0);
          response.body.appetisers.length.should.be.eql(0);
          response.body.mains.length.should.be.eql(0);
          response.body.desserts.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST activity', () => {
    it('accepts a POST request', (done) => {
      chai
        .request(server)
        .post('/activities')
        .send(activity0)
        .end((err, response) => {
          response.should.have.status(201);
          response.body.name.should.be.eql('test');
          response.body.cost.should.be.eql(0);
          response.body.accessibility.should.be.eql(5);
          response.body.size.should.be.eql('nibble');
          response.body.categories.includes('testing').should.be.eql(true);
          done();
        });
    });
  });

  describe('/GET categories', () => {
    beforeEach((done) => {
      chai
        .request(server)
        .post('/activities')
        .send(activity)
        .end((err, response) => {
        done();
      });
    })

    it('should GET all the categories', (done) => {
      chai
        .request(server)
        .get('/categories')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.includes('testing').should.be.eql(true);
          response.body.length.should.not.be.eql(0);
          done();
        });
    });
  });

  describe('/GET search', () => {
    beforeEach((done) => {
      chai
        .request(server)
        .post('/activities')
        .send(activity0)
        .end((err, response) => {
      });

      chai
        .request(server)
        .post('/activities')
        .send(activity1)
        .end((err, response) => {
        done();
      });
    })

    it('should filter by cost', (done) => {
      chai
        .request(server)
        .get('/search?cost=0')
        .end((err, response) => {
          console.log(response.body)
          response.should.have.status(200);
          response.body[0].name.should.be.eql('test')
          response.body[0].cost.should.be.eql(0)
          response.body.length.should.be.eql(1);
          done();
        });
    });
  });
});
