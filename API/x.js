const axios = require('axios').default;
const assert = require('assert');
const fs = require('fs');


const expected_message = 'Successfully! All records has been fetched.'

/*
axios.get('https://dummy.restapiexample.com/api/v1/employees')
  .then(function (response) {
  let current_message = response.data.message;
  assert.equal(current_message,expected_message);
  console.log('succesfullll:3');
  })
  .catch(function (error) {
    console.log(error);
  });

*/

/*
const data = fs.readFileSync('data.json', 'utf8');
console.log(data);
const data2 = JSON.parse(data);
console.log(data2);

refactor
    ||
    \/
*/
function readFile(fileNamePath) {
  let data = fs.readFileSync(fileNamePath, 'utf8');
  return JSON.parse(data);
}



axios.post('https://dummy.restapiexample.com/api/v1/create', readFile('cica.json'))
  .then((response) => { console.log(response) },
    (error) => { console.log(error) });
