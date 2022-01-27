"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let genre = [
      "코미디",
      "로맨스",
      "드라마",
      "액션",
      "스릴러",
      "판타지",
      "SF",
      "호러",
    ];
    let datas = [];
    for (let i = 0; i < genre.length; i++) {
      let obj = {
        genre: genre[i],
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };

      datas.push(obj);
    }

    return queryInterface.bulkInsert("genres", datas, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("genres", null, {});
  },
};
