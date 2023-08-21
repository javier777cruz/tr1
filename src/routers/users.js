const express = require ('express');
const router = express.Router ();
const controller = require ('../controllers/usersController.JS')

router.get('/', controller.all);

router.get('/profile/:id', controller.one);


   module.exports = router;