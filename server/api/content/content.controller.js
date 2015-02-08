'use strict';

var _ = require('lodash');
var Content = require('./content.model');

// Get list of contents
exports.index = function(req, res) {
  Content.find(function (err, contents) {
    if(err) { return handleError(res, err); }
    return res.json(200, contents);
  });
};

// Get a single content
exports.show = function(req, res) {
  Content.findById(req.params.id, function (err, content) {
    if(err) { return handleError(res, err); }
    if(!content) { return res.send(404); }
    return res.json(content);
  });
};

// Creates a new content in the DB.
exports.create = function(req, res) {
  req.body.curator = req.user._id ;
  Content.create(req.body, function(err, content) {
    if(err) { return handleError(res, err); }
    return res.json(201, content);
  });
};

// Updates an existing content in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Content.findById(req.params.id, function (err, content) {
    if (err) { return handleError(res, err); }
    if(!content) { return res.send(404); }
    var updated = _.merge(content, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, content);
    });
  });
};

// Deletes a content from the DB.
exports.destroy = function(req, res) {
  Content.findById(req.params.id, function (err, content) {
    if(err) { return handleError(res, err); }
    if(!content) { return res.send(404); }
    content.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}