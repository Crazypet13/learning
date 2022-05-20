let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'secret',
  database : 'test'
});
 
 
let query = function (queryString,fields){

return new Promise ((resolve,reject)=>{
  connection.connect();

  connection.query(queryString, function (error, results, fields) {
    if (error) reject(error);
    resolve(results);
  });
  connection.end();

});

}

let noOperation = function(){
  console.log("OMG!!!");
}

exports.query = query;
exports.noOp = noOperation;


/*
connection.query('SELECT * FROM recipe', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 */
