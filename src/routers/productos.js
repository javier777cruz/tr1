const express = require ('express');
const router = express.Router ();
const controller = require ('../controllers/productosController');
const logs = require ('../middlewares/logger');
const upload = require ('../middlewares/storage');


/* Ruta de todos los productos*/
router.get ('/', logs, controller.all);
/*Ruta de detalle de producto*/
router.get ('/detalle/:id', controller.one);
/*Actualizar producto */
router.put ('/update/:id', controller.update);

/*Ruta de nuevo producto */
router.post ('/crear', upload.single('image'), controller.create);

module.exports = router;