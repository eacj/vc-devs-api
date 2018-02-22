'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GabaritoModel = new Schema({
  name: {
    type: String
  },
  ano: {
    type: Number
  },
  link: {
    type: String
  }
},
{
    collection: 'gabarito'
});

module.exports = mongoose.model('gabarito', GabaritoModel);