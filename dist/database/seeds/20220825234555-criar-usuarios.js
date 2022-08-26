"use strict";const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          nome: "Luiz",
          email: "luiz@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 2",
          email: "luiz2@gmail.com",
          password_hash: await bcryptjs.hash("56789123", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz 3",
          email: "luiz3@gmail.com",
          password_hash: await bcryptjs.hash("1234561313", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      // eslint-disable-next-line comma-dangle
      {}
    );
  },

  // eslint-disable-next-line no-empty-function
  async down() {},
};
