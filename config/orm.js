// Import MySQL connection.
const connection = require('./connection.js');


// Helper function to convert object key/value pairs to SQL syntax
// TOOK THIS FROM CAT.JS ACTIVITY 16
const objToSql = (ob) => {
  const arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`;
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(`${key}=${value}`);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
};


const orm = {
  selectAll(table_name, cb) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString, [table_name],
      (err, result) => {
        if (err) {
          throw err;
        }
        cb(result)
        console.log(result);
      });
  },
  insertOne(table_Name, column1, column2, burer, TorF) {
    const queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
    connection.query(
      queryString, [table_Name, column1, column2, burer, TorF], 
      (err, result) => {
        if (err) throw err;
        console.log(result)
      })
  },

//STOPPED HERE - NOT SURE HOW TO MAKE THIS JUAN WORK

  updateOne(table_name, objColVals, condition, cb) {
    let queryString = `UPDATE ${table_name}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

  module.exports = orm;
