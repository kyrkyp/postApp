const CategoryEntity = require("../models/Category").CategoryEntity;
const dataSource = require("../connect").dataSource;

function create(name) {
  console.log("Create a category", name);
  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .insert(CategoryEntity)
    .values({ name: name })
    .execute()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function findOne(id) {
  console.log("Find a category", id);

  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select("category")
    .from(CategoryEntity, "category")
    .where("category.id = :id", { id: id })
    .getOne();

  return result;
}

function findAll() {
  console.log("Find all categories");

  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .select("category")
    .from(CategoryEntity, "category")
    .getMany();

  return result;
}

function update(data) {
  console.log("Update a category");

  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .update(CategoryEntity)
    .set({ name: data.name })
    .where("id = :id", { id: data.id })
    .execute()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

function deleteCategory(id) {
  console.log("Delete a category");

  const result = dataSource
    .getRepository(CategoryEntity)
    .createQueryBuilder()
    .delete()
    .from(CategoryEntity)
    .where("id = :id", { id: id })
    .execute()
    .catch((err) => {
      console.log(err);
    });

  return result;
}

module.exports = { create, findAll, findOne, update, deleteCategory };
