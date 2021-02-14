
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values


// Import MySQL connection.
const connection = require('./connection.js');

const orm = {
  selectAll(table_name) {
    const queryString = 'SELECT * FROM ??';
    connection.query(
      queryString, [table_name],
      (err, result) => {
        if (err) throw err;
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
// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;


//STOPPED HERE TO FIGURE OUT HOW TO DO THIS - WATCH VIDEO EXPLANATION OF UNIT 13 ACT 16 2/9 class

  updateOne(table_Name, column1, column2, burer, TorF) {
    const queryString = 'UPDATE ?? SET ?? ';
    connection.query(
      queryString, [table_Name, column1, column2, burer, TorF], 
      (err, result) => {
        if (err) throw err;
        console.log(result)
      })
  },
}

  module.exports = orm;
