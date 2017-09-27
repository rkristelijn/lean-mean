'use strict';

module.exports = function(app) {
  var task = require('./controller');

  app.route('/task')
    .get(task.list)
    .post(task.create);

  app.route('/task/:taskId')
    .get(task.read)
    .put(task.update)
    .delete(task.delete);
};