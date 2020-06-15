'use strict';
/**
 * main route
 * @module Route
 */
const express = require('express');
const Categories = require('./categories/categories-model.js');
const products = require('./products/products-model.js');

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
  module.exports= getModel;
  