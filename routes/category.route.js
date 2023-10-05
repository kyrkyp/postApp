const express = require("express");
const router = express.Router();

const { body, param, validationResult } = require("express-validator");

const categoryController = require("../controllers/category.controller");

const idValidator = () => {
  return [param("id").isNumeric().withMessage("ID must be an integer")];
};

const nameValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("Name cannot be empty"),
    body("name").isString().withMessage("Name must be a string"),
  ];
};

const updateValidator = () => {
  return [
    param("id").isNumeric().withMessage("ID must be an integer"),
    body("id").isNumeric().withMessage("ID must be an integer"),
    body("id").not().isEmpty().withMessage("ID cannot be empty"),
    body("name").isString().withMessage("Name must be a string"),
    body("name").not().isEmpty().withMessage("Name cannot be empty"),
  ];
};

router.get("/", categoryController.findAll);

router.get(
  "/:id",
  idValidator(),
  (reg, res, next) => {
    const errors = validationResult(reg);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  },
  categoryController.findOne
);

router.post(
  "/",
  nameValidator(),
  (reg, res, next) => {
    const errors = validationResult(reg);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  },
  categoryController.create
);

router.patch(
  "/:id",
  updateValidator(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  },
  categoryController.update
);

router.delete(
  "/:id",
  idValidator(),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ status: false, errors: errors.array() });
    }
    next();
  },
  categoryController.delete
);

module.exports = router;
