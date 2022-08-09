/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promisification = require('./promisification.js');
var promiseConstructor = require('./promiseConstructor.js');
// var callbackReview = require('./callbackReview.js');
// var db = Promise.promisifyAll(require('../lib/db'));
// var fs = Promise.promisifyAll(fs);

// getGitHubProfileAsync(user): ,
// generateRandomTokenAsync: ,
// readFileAndMakeItFunnyAsync(filePath):
// * (1) reads a GitHub username from a `readFilePath`
// *     (the username will be the first line of the file)
// * (2) then, sends a request to the GitHub API for the user's profile
// * (3) then, writes the JSON response of the API to `writeFilePath`
var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // return new Promise((resolve, reject) => {

  // });
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => {
      return promisification.getGitHubProfileAsync(user);
    })
    .then((body) => {
      console.log('body ' + JSON.stringify(body));
      fs.writeFileSync(writeFilePath, JSON.stringify(body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
