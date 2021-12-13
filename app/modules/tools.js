const articlesData = require('../data/articles.json');

const toolsModule = {
  findArticleById: (paramsId, article) => {
    return article['id'] == paramsId;
  },
};

module.exports = toolsModule;