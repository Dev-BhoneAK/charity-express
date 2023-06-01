/**
 * @module articleController
 */
const articleService = require("../services/articleService");
const asyncHandler = require("express-async-handler");

exports.getAllArticles = async (req, res) => {
  const articles = await articleService.getAllArticles();
  if (!articles) {
    res.status(404);
    throw new Error("Articles Not Found");
  }
  res.status(200).json(articles);
};

exports.getArticle = asyncHandler(async (req, res) => {
  const articleId = req.params.articleId;
  const article = await articleService.getArticle(articleId);
  if (!article) {
    res.status(404);
    throw new Error("Article Not Found");
  }
  res.status(200).json(article);
});
