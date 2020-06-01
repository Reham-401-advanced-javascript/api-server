'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

// 404 err
describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/401-class').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  // 404 err
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.patch('/categories').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  // 200 err

  it('should respond with 200 on /categories', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  // 500 err

  it('should respond with 500 Error ', () => {
    return mockRequest
      .get('/server error').then(results => {
        expect(results.status).toBe(500);
      }).catch(e => console.error(e));
  }); 

  // timestamp test 
  it('should respond a timeStamp ', () => {
    return mockRequest.get('/timeStamp').then(results => {
      expect(results.headers.date).toBeDefined();
    });
  });

  // products rout 

  it('should respond to a get request to /products', () => {
    return mockRequest.get('/products').then(results => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond to a get request to /products/1', () => {
    return mockRequest.get('/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });
    
  it('should respond to a post request to /products', () => {
    return mockRequest.post('/products').then(results => {
      expect(results.status).toBe(200);
    });
  });
  
  
  it('should respond to a delete request to /products/1', () => {
    return mockRequest.delete('/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });

  
  

  // categories routs 

  it('should respond to a get request to /categories', () => {
    return mockRequest.get('/categories').then(results => {
      expect(results.status).toBe(200);
    });
  });

  it('should respond to a get request to /categories/2', () => {
    return mockRequest.get('/categories/2').then(results => {
      expect(results.status).toBe(200);
    });
  });
    
  it('should respond to a post request to /categories', () => {
    return mockRequest.post('/categories').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond to a put request to /categories/1', () => {
    return mockRequest.put('/categories/1').then(results => {
      expect(results.status).toBe(200);
    });
  });

  
});