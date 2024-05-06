const express = require('express');
const router = express.Router();
const dosenController = require('../controllers/dosenController');

// Define routes
router.get('/', dosenController.findAll);
router.get('/:id', dosenController.show);
router.post('/', dosenController.create);
router.put('/:id', dosenController.update);
router.delete('/:id', dosenController.delete);

module.exports = router;
