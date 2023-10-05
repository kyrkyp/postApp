const postService = require("../services/post.service");

exports.create = async (req, res) => {
  const data = req.body;

  console.log("Insert post ", data.title);

  try {
    const result = await postService.create(data);
    res.status(200).json({ status: true, data: result });
    console.log("Insert post successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  console.log("Find all posts");

  try {
    const result = await postService.findAll();
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.findOne = async (req, res) => {
  const id = req.params.id;

  console.log("Find post by id ", id);

  try {
    const result = await postService.findOne(id);
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.updatePost = async (req, res) => {
  const id = req.params.id;

  console.log("Update post with id ", id);

  try {
    const result = await postService.updatePost(req.body);
    res.status(200).json({ status: true, data: result });
    console.log("Update post successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  const id = req.params.id;

  console.log("Update post category with id ", id);

  try {
    const result = await postService.updateCategory(req.body);
    res.status(200).json({ status: true, data: result });
    console.log("Update category successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deletePost = async (req, res) => {
  const id = req.params.id;

  console.log("Delete post with id ", id);

  try {
    const result = await postService.deletePost(id);
    res.status(200).json({ status: true, data: result });
    console.log("Delete post successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deleteCategories = async (req, res) => {
  const id = req.params.id;

  console.log("Delete post category with id ", id);

  try {
    const result = await postService.deleteCategories(req.body);
    res.status(200).json({ status: true, data: result });
    console.log("Delete category successfully");
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};
