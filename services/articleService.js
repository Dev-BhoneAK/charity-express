const articleModel = require("../models/articleModel");

exports.getAllArticles = async () => {
  const articles = await articleModel.find().sort({ createdAt: "desc" });
  const responseData = articles.map((article) => ({
    ...article._doc,
    image: process.env.DOMAIN_URI + article.image,
    imageDetail: process.env.DOMAIN_URI + article.imageDetail,
  }));
  return responseData;
};

exports.getArticle = async (articleId) => {
  const article = await articleModel.findById(articleId);
  return article;
};
