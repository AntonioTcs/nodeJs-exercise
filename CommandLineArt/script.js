const figlet = require('figlet');

figlet('Hi there!', function (err, data) {
  if (err) {
    console.log('Error: ', err);
    return;
  }
  console.log(data);
});
