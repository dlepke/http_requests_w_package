var request = require('request');
var fs = require('fs');

var url = 'https://sytantris.github.io/http-examples/future.jpg'

request.get(url)
       .on('error', function (err) {
        throw err;
       })
       .on('response', function (response) {
        console.log('Downloading image...');
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Status Message: ', response.statusMessage);
        console.log('Response Content Type: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'))
        .on('finish', function (finish) {
        console.log('Download complete.');
        });