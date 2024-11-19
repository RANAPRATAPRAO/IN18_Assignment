const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/registrations', registrationController.create);
router.get('/registrations', registrationController.getAll);
router.get('/registrations/:id', registrationController.getById);
router.put('/registrations/:id', registrationController.update);
router.delete('/registrations/:id', registrationController.delete);

module.exports = router;
