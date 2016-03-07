var $ = require('jquery');
var handlebars = require('handlebars');
var Likes = require('./models/like');

var newLikes = new Likes();

  $('.likes-button').on('click', function(){
    console.log(newLikes.countingNumbers());
  });


// console.log(newLikes.get('likes'));
