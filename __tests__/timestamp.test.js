'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('sever', () => {

  // timestamp test 
  it('should respond a timeStamp ', () => {
    return mockRequest.get('/timeStamp').then(results => {
      expect(results.headers.date).toBeDefined();
    });
  });
});   