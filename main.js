var fs = require('fs');
var Promise = require('promise');

var read = function(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

var write = function(filePath, content, splitWord, data) {
  var splitedData = data.split(splitWord);
  var txt = splitedData[0] + splitWord + '\n  ' + content + splitedData[1];
  fs.writeFile(filePath, txt, function(err) {
    if (err) {
      throw err;
      console.log(err);
    }
  });
};

var file = './index.html';

read(file).then(function(data) {
  write(file, '<div class="template">New content</div>', '<!-- 最新ここ -->', data);
});
