const express = require('express');
const router = express.Router();

const routerModule = require('./middleware/routerModule');

router.get('/', routerModule.displayHomepage);

router.get('/article/:id', routerModule.displayArticle);

router.use(function (req, res, next) {
    res.status(404).send('not found');
  });

module.exports = router;