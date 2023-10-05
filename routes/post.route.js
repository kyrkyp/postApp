const express = require("express");
const router = express.Router();

const { body, param, validationResult } = require("express-validator");

const postController = require("../controllers/post.controller");

const text_and_title_Validator = () => {
  return [
    body("text").not().isEmpty().withMessage("Text is a mandatory field"),
    body("title").not().isEmpty().withMessage("Title is a mandatory field"),
    body("text").isString().withMessage("Text must be a string"),
    body("title").isString().withMessage("Title must be a string"),
  ];
};

router.post(
  "/",
  text_and_title_Validator(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  },
  postController.create
);

router.get("/", postController.findAll);

router.get("/:id", postController.findOne);

router.patch("/:id", postController.updatePost);

router.patch("/:id/category", postController.updateCategory);

router.deletePost("/:id", postController.deletePost);

router.deleteCategory("/:id/categories", postController.deleteCategories);

module.exports = router;
