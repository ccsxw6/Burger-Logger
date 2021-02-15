// Inside burger.js, import orm.js into burger.js
const orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll(cb) {
        orm.selectAll("burgers", (res) => cb(res));
    },
    insertOne(cols, vals, cb) {
        orm.insertOne("burgers",cols, vals, (res) => cb(res));
    },
    update(objColVals, condition, cb) {
        orm.update('burgers', objColVals, condition, (res) => cb(res));
      },
    };
  

// Export at the end of the burger.js file.
module.exports = burger;


