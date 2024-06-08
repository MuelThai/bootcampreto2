const express = require('express');
const RegistroController = require('../controllers/registroControllers');

const router = express.Router();

router.get('/usuarios', RegistroController.index);
router.get('/create', RegistroController.create);
router.post('/create', RegistroController.store);
router.post('/usuarios/delete', RegistroController.destroy);
router.get('/usuarios/edit/:id', RegistroController.edit);
router.post('/usuarios/edit/:id', RegistroController.update);

module.exports = router;