const dataSource = require("../connect").dataSource;
const PostEntity = require("../entities/post").PostEntity;

function create(data) {
  const result = dataSource
    .getRepository(PostEntity)
    // .createQueryBuilder()
    // .relation(PostEntity, "categories")
    // .of(data)
    // .add(data.categories)
    .save(data)
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function findAll() {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.categories", "category")
    .getMany()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function findOne(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder("post")
    .leftJoinAndSelect("post.categories", "category")
    .where("post.id = :id", { id: id })
    .getOne()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function updatePost(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .update(PostEntity)
    .set({
      title: data.title,
      text: data.text,
    })
    .where("id = :id", { id: data.id })
    .execute()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function updateCategory(data) {
  const actualRelationships = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data)
    .loadMany();

  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data.id)
    .addAndRemove(data.categories, actualRelationships)
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function deletePost(id) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .delete()
    .from(PostEntity)
    .where("id = :id", { id: id })
    .execute()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function deleteCategories(data) {
  const result = dataSource
    .getRepository(PostEntity)
    .createQueryBuilder()
    .relation(PostEntity, "categories")
    .of(data)
    .remove(data.categories)
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  create,
  findAll,
  findOne,
  updatePost,
  updateCategory,
  deletePost,
  deleteCategories,
};
