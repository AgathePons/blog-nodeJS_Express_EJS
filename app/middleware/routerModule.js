const toolsModule = require('../modules/tools');

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
    //const tools = require('../modules/tools');
    //const article = articlesData.find(toolsModule.findArticleById(req.params.id, element));
    const article = articlesData.find(
      (article) => {
        return article["id"].toString() === req.params.id;
      }
    );
    if (article) {
      const data = {
        articlesData,
        article
      };
      res.render('article', data);
    } else {
      next();
    }
  },
  displayCategory: (req,res,next) => {
    let articlesData = require('../data/articles.json');
    articlesData = articlesData.filter(article => article.category === req.params.category);
    if(articlesData.length > 0) {
      const data = {
        articlesData
      };
      res.render('index', data);
    } else {
      next();
    }
  }
};

module.exports = routerModule;