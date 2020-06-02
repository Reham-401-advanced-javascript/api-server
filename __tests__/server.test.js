'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

// 200 
describe('sever', () => {

  it('should respond with 200 on /categories', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });

  //-----------------------------------------------------------------------------------
  // products rout 
  //-----------------------------------------------------------------------------------

  it('should respond to a get request to /products', () => {
    let obj = { category: 'accessories', name: 'reham', display_name: 'lab7', description: 'cover this wide headband' };
    return mockRequest.post('/products')
      .send(obj)
      .then(data => {
        // console.log('aaaaaaaaaa data from post',data.body);
        
        return mockRequest.get('/products').then(results => {
          
          Object.keys(obj).forEach((key) => {
            expect(results.body.results[0][key]).toEqual(obj[key]);
          });
          // console.log('dddddddd',results.body.results[0]);
          // expect(results.status).toBe(200);
        });
      });
  });

  
  it('should respond to a get request to /products/1', () => {
    return mockRequest.get('/products/1').then(results => {
      expect(results.status).toBe(200);
    });
  });


  it('should respond to a post request to /products', () => {
    let obj = { category: 'accessories', name: 'reham', display_name: 'lab7', description: 'cover this wide headband' };
    return mockRequest.post('/products')
      .send(obj)
      .then(results => {
        // console.log('result ',results.body);
        Object.keys(obj).forEach((key) => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('should respond to a put request to /products/1', () => {
    let obj = { category: 'accessories', name: 'reham', display_name: 'lab7', description: 'cover this wide headband' };
    return mockRequest.post('/products')
      .send(obj)
      .then(data => {
        // console.log('data of body',data.body);
        let updateObj = { category: 'accessories', name: 'qusai', display_name: 'lab-7', description: 'cover this wide headband',id: data.body.id };
        return mockRequest.put(`/products/${data.body.id}`)
          .send(updateObj)
          .then(results => {
            // console.log('data ooooooooooooooooof body',results.body);

            Object.keys(updateObj).forEach((key) => {
              expect(results.body[key]).toEqual(updateObj[key]);
            });
          });
      });
  });

  
 

  it('should respond to a delete request to /products/1', () => {
    let obj = { category: 'accessories', name: 'reham', display_name: 'lab7', description: 'cover this wide headband' };
    return mockRequest.post('/products')
      .send(obj)
      .then(data => {
        // console.log('aaaaaaaaaa data from post',data.body);
        
        return mockRequest.get('/products').then(getdata => {
          return mockRequest.delete(`/products/${getdata.body.results[0].id}`)
            .then(results => {
              // console.log('sssssssss',results.body);
          
              Object.keys(obj).forEach((key) => {
                expect(results.body).toEqual({action: 'deleted successfully'});
              });
              // console.log('dddddddd',results.body.results[0]);
              // expect(results.status).toBe(200);
            });
        });
      });
  });

  //-----------------------------------------------------------------------------------
  // categories routs 
  //-----------------------------------------------------------------------------------
 

  it('should respond to a get request to /categories', () => {
    let obj = { name: 'accessories', display_name: 'accessories', description: 'big collection of modern accessories' };
    return mockRequest.post('/categories')
      .send(obj)
      .then(data => {    
        return mockRequest.get('/categories').then(results => {
          Object.keys(obj).forEach((key) => {
            expect(results.body.results[0][key]).toEqual(obj[key]);
          });
        });
      });
  });

  
  it('should respond to a get request to /categories/1', () => {
    return mockRequest.get('/categories/1').then(results => {
      expect(results.status).toBe(200);
    });
  });


  it('should respond to a post request to /categories', () => {
    let obj = { name: 'accessories', display_name: 'accessories', description: 'big collection of modern accessories' };
    return mockRequest.post('/categories')
      .send(obj)
      .then(results => {
        Object.keys(obj).forEach((key) => {
          expect(results.body[key]).toEqual(obj[key]);
        });
      });
  });

  it('should respond to a put request to /categories/1', () => {
    let obj = { name: 'accessories', display_name: 'accessories', description: 'big collection of modern accessories' };
    return mockRequest.post('/categories')
      .send(obj)
      .then(data => {
        let updateObj = {  name: 'bags', display_name: 'bags', description: 'big collection of modern bags',id: data.body.id };
        return mockRequest.put(`/categories/${data.body.id}`)
          .send(updateObj)
          .then(results => {
            Object.keys(updateObj).forEach((key) => {
              expect(results.body[key]).toEqual(updateObj[key]);
            });
          });
      });
  });

  
 

  it('should respond to a delete request to /categories/1', () => {
    let obj = { name: 'accessories', display_name: 'accessories', description: 'big collection of modern accessories' };
    return mockRequest.post('/categories')
      .send(obj)
      .then(data => {
        // console.log('aaaaaaaaaa data from post',data.body);
        
        return mockRequest.get('/categories').then(getdata => {
          return mockRequest.delete(`/categories/${getdata.body.results[0].id}`)
            .then(results => {
              Object.keys(obj).forEach((key) => {
                expect(results.body).toEqual({action: 'deleted successfully'});
              });
            });
        });
      });
  });

  
});