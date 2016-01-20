process.env.NODE_ENV = 'test';

var nock = require('nock'),
    chai = require('chai'),
    sinon = require('sinon');

global.expect = chai.expect;

var sandbox = sinon.sandbox.create();

afterEach(function() {
  sandbox.restore();
  nock.cleanAll();
  nock.enableNetConnect();
});

exports.sandbox = sandbox;
