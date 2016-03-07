var Backbone = require('backbone');
var $ = require('jquery');
var increment  = 0;

var LikesModel = Backbone.Model.extend({

  defaults: {
    likes: 0
  },
  countingNumbers: function(){
    increment = this.get('likes') + 1;
    this.set('likes', increment);
    $('.likes-button').html(this.get('likes') + ' likes');
  }
});



module.exports = LikesModel;
