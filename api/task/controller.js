'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Task');

  function handleError(res, httpCode, message) {
    res.status(httpCode).send(message);
    return;
  }
  function handleMethodNotAllowed(res, message) {
    handleError(res, 405, message);
  }
  function handleBadRequest(res, message) {
    handleError(res, 400, message);
  }
  function handleGone(res, message) {
    handleError(res, 410, message);
  }
  function handleInternalServerError(res, message) {
    handleError(res, 500, message);
  }

  function listTasks() {
    console.log("listTasks");
    Task.find({}, function (err, tasks) {
      console.log("found:", tasks);
    });
    return tasks;
  }
  // exports.list = function (req, res) {
  //   console.log("list", req.method, req.url, req.body);
  //   var tasks = listTasks();
  //   if(!tasks) handleInternalServerError(res, 'Could not find tasks');
  //   else res.json(tasks);
  // };
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

/**
'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Task');

function handleError(res, httpCode, message) {
  res.status(httpCode).send(message);
  return;
}
function handleMethodNotAllowed(res, message) {
  handleError(res, 405, message);
}
function handleBadRequest(res, message) {
  handleError(res, 400, message);
}
function handleGone(res, message) {
  handleError(res, 410, message);
}
function handleInternalServerError(res, message) {
  handleError(res, 500, message);
}

function listTasks() {
  console.log("listTasks");
  Task.find({}, function (err, tasks) {
    console.log("found:", tasks);
  });
  return tasks;
}
function createTask(taskContent) {
  let task = new Task(taskContent);
  task.save(function (err, task) {
    if (err) return false;
    return task;
  });
}


exports.list = function (req, res) {
  console.log("list", req.method, req.url, req.body);
  var tasks = listTasks();
  if(!tasks) handleInternalServerError(res, 'Could not find tasks');
  else res.json(tasks);
};
exports.create = function (req, res) {
  console.log("create", req.method, req.url, req.body);
  var task = createTask(req.body);
  if(!task) handleInternalServerError(res, 'Could not create task:'+ JSON.stringify(req.body));
  else res.json(task);
  // task.save(function (err, task) {
  //   if (err)
  //     res.send(err);
  //   res.json(task);
  // });
};
exports.read = function (req, res) {
  console.log("read", req.method, req.url, req.body);
  Task.findById(req.params.taskId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.update = function (req, res) {
  console.log("update", req.method, req.url, req.body);
  let found = false;
  let clean = false;

  Task.findById(req.params.taskId, function (err, task) {
    if (!task) {
      handleGone(res, 'Object not found:' + req.params.taskId);
    } else {
      found = true;
    }

    if (req.body.name !== task.name) {
      handleMethodNotAllowed(res, 'Has been updated by another user' + req.params.taskId);
    } else {
      clean = true;
    }
  });

  if (!clean && !found) {
    console.log('all fine, continue with update');
    req.body.name = req.body.newName;
    delete req.body.newName;

    Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, function (err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  }
};

exports.delete = function (req, res) {
  console.log("delete", req.method, req.url, req.body);
  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
**/

