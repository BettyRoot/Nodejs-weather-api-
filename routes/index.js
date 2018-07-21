var express = require('express');
var router = express.Router();

const pageControllers = require('../controllers/pageControllers');
const appControllers = require('../controllers/applicationControllers');


router.get('/', pageControllers.home);
router.post('/applications', appControllers.store);
module.exports = router;
