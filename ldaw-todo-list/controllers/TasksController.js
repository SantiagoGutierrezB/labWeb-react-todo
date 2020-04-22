const Task = require('../models/Task');

exports.get = (req, res) => {
  let tasks = Task.all().then((tasks) => {
    res.json(tasks);
  });
}

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.done = (req, res) => {
  // URL
  let id = req.params.id;
  Task.find(id).then((task) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.markAsDone(task).then((task) => res.json(task));
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  // URL
  let id = req.params.id;
  Task.find(id).then((task) => {
    if(req.xhr || req.headers.accept.indexOf('json') > -1) {
      Task.deleteTask(task).then(() => res.json({id: id, status: "deleted"}));
    } else {
      res.redirect('/');
    }
  });
}