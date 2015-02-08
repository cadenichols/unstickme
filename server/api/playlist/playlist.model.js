'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PlaylistSchema = new Schema({
  title: String,
  curator: {type: Schema.ObjectId , ref: 'User'},
  contents: [{type: Schema.ObjectId, ref: 'Content' }],
  description: String
});

module.exports = mongoose.model('Playlist', PlaylistSchema);