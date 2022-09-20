const express = require("express");
const router = express.Router();

const articleController = require("../controllers/articleController");

router.get("/", articleController.getAllArticles);

router.get("/:articleId", articleController.getArticle);

module.exports = router;
