const article = require("../controllers/ArticleController");
const jwt = require("../../config/jwt.config");
const express = require("express");
const router = express.Router();
const verifyToken = jwt.verifyToken;

router.post("/addArticle", article.create);
router.get("/articls", verifyToken, article.getAll);
router.get("/article/:id", article.getOne);
router.put("/article/:id", article.update);
router.delete("/article/:id", article.delete);
const fileUpload = require("../upload/upload");
router.post("/upload", verifyToken, fileUpload.uploadFile);
module.exports = router;
