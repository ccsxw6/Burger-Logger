  
var orm = require("../config/orm.js");

var burger = {
    selectAll(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne(name, cb) {
        orm.insertOne("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },
    updateOne(id, cb) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, cb);
    }
};

module.exports = burger;

