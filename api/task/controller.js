'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Task');

exports.list = function(req, res) {
  console.log("list", req.method, req.url, req.body);
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create = function(req, res) {
  console.log("create", req.method, req.url, req.body);
  var task = new Task(req.body);
  task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read = function(req, res) {
  console.log("read", req.method, req.url, req.body);
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update = function(req, res) {
  console.log("update", req.method, req.url, req.body);
  Task.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    if(req.body.name !== task.name) {
      res.json({ message: 'Has been updated by another user'});
      return;
    }

    req.body.name = req.body.newName;
    delete req.body.newName;

    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  });
};

exports.delete = function(req, res) {
  console.log("delete", req.method, req.url, req.body);
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

