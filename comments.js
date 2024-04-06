// Create web server
// Use express framework
// Use body-parser to parse json data
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// Path: comment.js
// Create comment object
var Comment = function(comment) {
  this.id = comment.id;
  this.author = comment.author;
  this.text = comment.text;
};

// Path: comment.js
// Create comments array
var comments = [];

// Path: comment.js
// Create comment object
var comment1 = new Comment({
  id: 1,
})