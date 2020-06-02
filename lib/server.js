'use strict';
const express = require('express');
const logRequest = require('./middleware/logger.js');
const timeStamp = require('./middleware/timestamp.js');
const notFoundHandler = require('./middleware/404.js');
const errorHandler = require('./middleware/500.js');

const app = express();

// global middleware
app.use(express.json()); //body-parser to add body to the req
app.use(timeStamp);
app.use(logRequest);

app.get('/timeStamp',timeStamp);

// -------------------------------------------------------------------------------
// products routs 
// -------------------------------------------------------------------------------


let productsDb = [];

app.post('/products',timeStamp, (req, res) => {
  const {category, name , display_name,description } = req.body;
  console.log('name', name);
  const record = { category,name ,display_name,description }; //{name:}
  record.id = productsDb.length + 1;
  productsDb.push(record);
  res.json(record);
});

app.get('/products', timeStamp,(req, res) => {
  const count = productsDb.length;
  const results = productsDb;
  res.json({ count, results });
  
});

app.get('/products/:id',timeStamp, (req, res) => {
  console.log(req.params);
  const id= req.params.id;
  const data =productsDb.filter(value=>{
    if(value.id===parseInt(id)){
      return value;
    }
  });
  res.json(data);
});

app.put('/products/:id', timeStamp,(req, res) => {
  const putId= req.params.id;
  const {category, name , display_name,description,id } = req.body;
  const updateData = { category,name ,display_name,description ,id};
  //   console.log('array',productsDb);

  productsDb =productsDb.map(value=>{
    if(value.id===parseInt(putId)){
      return updateData;
    } else{
      return value;
    }
  });
  //   console.log('updated array',productsDb);
  res.json(updateData);
});

app.delete('/products/:id',timeStamp,(req, res) => {
  const deletedId= req.params.id;
  productsDb =productsDb.map(value=>{
    if(value.id !==parseInt(deletedId)){
      return value;
    }else{

      res.json({'action':'deleted successfully'});
    }
  });
});

// -------------------------------------------------------------------------------
// categories routs
// -------------------------------------------------------------------------------

let categoriesDb = [];


app.post('/categories',timeStamp, (req, res) => {
  const {category, name , display_name,description } = req.body;
  console.log('name', name);
  const record = { category,name ,display_name,description }; //{name:}
  record.id = categoriesDb.length + 1;
  categoriesDb.push(record);
  res.json(record);
});

app.get('/categories',timeStamp, (req, res) => {
  const count = categoriesDb.length;
  const results = categoriesDb;
  res.json({ count, results });
});


app.get('/categories/:id', timeStamp,(req, res) => {
  console.log(req.params);
  const id= req.params.id;
  const data =categoriesDb.filter(value=>{
    if(value.id===parseInt(id)){
      return value;
    }
  });
  res.json(data);
});


app.put('/categories/:id',timeStamp, (req, res) => {
  const putId= req.params.id;
  const {category, name , display_name,description ,id} = req.body;
  const updateData = { category,name ,display_name,description ,id};
  //   console.log('array',categoriesDb);

  categoriesDb =categoriesDb.map(value=>{
    if(value.id===parseInt(putId)){
      return updateData;
    } else{
      return value;
    }
  });
  //   console.log('updated array',categoriesDb);
  res.json(updateData);
});


app.delete('/categories/:id',timeStamp,(req, res) => {
  const id= req.params.id;
  categoriesDb =categoriesDb.map(value=>{
    if(value.id !==parseInt(id)){
      return value;
    }else{

      res.json({'action':'deleted successfully'});
    }
  });
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------------------

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};