// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

const mongoose = require('mongoose');
const userModel = require('../app/models/user');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    userModel.remove({}, (error) => {
      done();
    });
  });

  describe('create a user and login', () => {
    it('can create a user', (done) => {
      let user = {
        name: 'pete',
        username: 'pete1',
        password: 'password',
        email: 'pete@test.com',
      };
      chai
        .request(server)
        .post('/user')
        .send(user)
        .end((error, response) => {
          console.log(response.body.user.name);
          response.should.have.status(201);
          response.should.be.a('object');
          response.body.user.name.should.be.eql('pete');
          response.body.user.email.should.be.eql('pete@test.com');
          response.body.user.username.should.be.eql('pete1');
          response.body.user.password.should.not.be.eql('password');
          response.body.user.tokens.length.should.not.be.eql(0);
          done();
        });
    });
  });
});
