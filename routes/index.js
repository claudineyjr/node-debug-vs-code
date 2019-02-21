const router = require('express').Router();
const controller = require('../controllers/index');

router.use('/movie', require('./movie'));
router.use('/', controller.get);

module.exports = router;