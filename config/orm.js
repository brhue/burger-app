const connection = require('./connection');

function selectAll(table) {
  return new Promise((resolve, reject) => {
    connection.query('select * from ??', table, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function insertOne(table, values) {
  return new Promise((resolve, reject) => {
    connection.query('insert into ?? set ?', [table, values], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function updateOne(table, values, id) {
  return new Promise((resolve, reject) => {
    connection.query('update ?? set ? where id = ?', [table, values, id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

module.exports = {
  selectAll,
  insertOne,
  updateOne,
};
