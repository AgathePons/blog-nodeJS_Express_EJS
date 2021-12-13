const routerModule = {
  displayHomepage : (req,res,next) => {
    const articlesData = require('../data/articles.json');
    const data = {
      articlesData
    }
    res.render('index', data);
  },
  displayArticle: (req,res,next) => {
    const articlesData = require('../data/articles.json');
    const article = articlesData.find(article => article.id.toString() === req.params.id);
    if (article) {
      const data = {
        articlesData,
        article
      };
      res.render('article', data);
    } else {
      next();
    }
  }
};

module.exports = routerModule;