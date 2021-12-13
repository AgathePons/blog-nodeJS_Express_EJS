const articlesData = require('../data/articles.json');

const routerModule = {
  displayHomepage : (req,res,next) => {
    for (let i=0; i < articlesData.length; i++) {
      const text = articlesData[i].text;
      let words = text.split(' ');
      words = words.slice(0, 30);
      const excerpt = words.join(' ');
      articlesData[i].excerpt = excerpt;
    }
    const data = {
      articlesData
    }
    res.render('index', data);
  },
  displayArticle: (req,res,next) => {
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
    articlesDataCategory = articlesData.filter(article => article.category === req.params.category);
    if(articlesDataCategory.length > 0) {
      const data = {
        articlesData: articlesDataCategory
      };
      res.render('index', data);
    } else {
      next();
    }
  }
};

module.exports = routerModule;