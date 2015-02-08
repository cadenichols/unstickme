/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Content = require('./content.model');

exports.register = function(socket) {
  Content.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Content.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('content:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('content:remove', doc);
}