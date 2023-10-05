const { dataSource } = require("../connect");
const { CategoryEntity } = require("../models/Category");
const categoryService = require("../services/category.services");

exports.findAll = async (req, res) => {
  console.log("Find all categories");

  try {
    const result = await categoryService.findAll();

    res.status(200).json({ status: true, data: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, data: err });
  }
};

exports.findOne = async (req, res) => {
  console.log("Find a category");

  const id = req.params.id;

  try {
    const result = await categoryService.findOne(id);

    res.status(200).json({ status: true, data: result });
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, data: err });
  }
};

exports.create = async (req, res) => {
  console.log("Create a category");

  const name = req.body.name;

  try {
    const result = await categoryService.create(name);
    res.status(200).json({ status: true, data: result });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, data: err });
  }
};

exports.update = async (req, res) => {
  console.log("Update a category");

  const id = req.params.id;
  // const name = req.body.name;

  try {
    const result = await categoryService.update(req.body);
    res.status(200).json({ status: true, data: result });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, data: err });
  }
};

exports.delete = async (req, res) => {
  console.log("Delete a category");

  const id = req.params.id;

  try {
    const result = await categoryService.deleteCategory(id);
    res.status(200).json({ status: true, data: result });
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ status: false, data: err });
  }
};
