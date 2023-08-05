// Create web server

// Import modules
var express = require('express');
var router = express.Router();

// Import model
var Comment = require('../models/comment');

// Import controller
var controller = require('../controllers/commentController');

// Set up routes
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

// Export module
module.exports = router;