const {
    getReflection,
    getAllReflections,
    createReflection,
    updateReflection,
    deleteReflection,
  } = require('../controllers/reflections.controller');
  const express = require('express');
  const canAccess = require('../middleware/auth.middleware');
  
  const reflectionsRoutes = express.Router();
  /**
   * Express routes for Reflections.
   *
   * RESTful endpoints make for easily adding to existing API features.
   */
  
  /**
   * Routes for all reflections. Evaluates to `/reflections/`.
   */
  reflectionsRoutes.get('/', canAccess, getAllReflections).post('/', canAccess, createReflection);
  
  /**
   * Routes for a reflection by id. Evalutes to `/reflections/:reflectionId`.
   */
  reflectionsRoutes
    .get('/:reflectionId', getReflection)
    .put('/:reflectionId', updateReflection)
    .delete('/:reflectionId', deleteReflection);
  
  module.exports = reflectionsRoutes;
  