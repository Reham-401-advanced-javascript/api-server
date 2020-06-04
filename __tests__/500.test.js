'use strict';
const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

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

  it('should respond to a 500 err to wrong path /api/v1/categories/1', () => {
    return mockRequest.get('/api/v1/categories/1').then(results => {
      console.log('bbbbbbbbbbbbbbbbb',results.body);

      expect(results.status).toBe(500);

    });
  });
});