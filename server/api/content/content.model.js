'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ContentSchema = new Schema({
  title: String,
  type: String,
  tags: [String],
  link: String,
  youtube: {},
  curator: {type: Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Content', ContentSchema);