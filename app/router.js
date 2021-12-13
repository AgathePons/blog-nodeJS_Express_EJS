const express = require('express');
const router = express.Router();

const routerModule = require('./middleware/routerModule');

router.get('/', routerModule.displayHomepage);

module.exports = router;