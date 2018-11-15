
const db = require('./database.js');

var TodoList = function() {};

TodoList.prototype.getAll = function(callback) {
    const sql = 'SELECT * FROM todo';
    var items = [];
    //回调函数是连接池，第一个参数是是否发生错误。

    db.query(sql, function(err, results) {
      if (err) {
        callback(true);
        return;
    }
      results.forEach((e) => { items.push(e.item);  });
      callback(false, items);
    });
};
//如何返回那个items

TodoList.prototype.addItem = function(item, callback) {
    const sql = 'INSERT INTO todo(item) VALUES(?)';
    db.query(sql, [item], function(err, results) {
      if (err) {
        callback(true);
        return;               
      }
      callback(false, results);   
    });

};

module.exports = TodoList;//导出todo-list,可以先写框架代码

