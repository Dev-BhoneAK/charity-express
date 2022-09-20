const articleModel = require("../models/articleModel");

exports.getAllArticles = async () => {
  const articles = await articleModel.find().sort({ createdAt: "desc" });
  return articles;
};

exports.getArticle = async (articleId) => {
  const article = await articleModel.findById(articleId);
  return article;
};
