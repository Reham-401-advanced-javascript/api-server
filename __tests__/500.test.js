'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

//500 err
describe('sever', () => {
  it('should respond with 500 Error with error path ', () => {
    return mockRequest
      .get('/server error').then(results => {
        expect(results.status).toBe(500);
      }).catch(e => console.error(e));
  }); 
  it('should respond with 500 Error with error method ', () => {
    return mockRequest
      .patch('/categories').then(results => {
        expect(results.status).toBe(500);
      }).catch(e => console.error(e));
  }); 

});