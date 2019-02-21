const router = require('express').Router();
const controller = require('../controllers/movie');

router.get('/', controller.get);
router.get('/:_id', controller.get);

module.exports = router;