const EntitySchema = require("typeorm").EntitySchema;

const PostEntity = new EntitySchema({
  name: "Post",
  target: "Post",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    title: {
      type: "varchar",
    },
    text: {
      type: "text",
    },
  },
  relations: {
    category: {
      target: "Category",
      type: "many-to-one",
      joinTable: true,
      cascade: true,
    },
  },
});

module.exports = { PostEntity };
