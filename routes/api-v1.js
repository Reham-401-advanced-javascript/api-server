'use strict';
const express = require('express');
const Categories = require('../lib/models/categories/categories-model.js');
const products = require('../lib/models/products/products-model.js');
const router = express.Router();
router.param('model', getModel);
function getModel(req, res, next) {
  const model = req.params.model; 
  switch (model) {
  case 'categories':
    req.model = Categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  default:
    next('invalid model');
    return;
  }
}
router.post('/:model', postHandler);
router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.get('/:model/:id', updateHandler);
router.get('/:model/:id', deleteHandler);

function postHandler(req, res, next) {
  req.model
    .create(req.body)
    .then((data) => res.status(200).json(data))
    .catch(next);
}

function getAllHandler(req, res, next) {
  req.model
    .get()
    .then((data) =>{
      const count = data.length;
      const results= data;
      res.status(200).json({count,results});
    })
    .catch((err) => next(err.message));
}

function getOneHandler(req, res, next) {
  req.model
    .get(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => next(err.message));
}

function updateHandler(req, res, next) {
  req.model
    .update(req.params.id ,req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err.message));
}

function deleteHandler(req, res, next) {
  req.model
    .delete(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err.message));
}
module.exports = router;