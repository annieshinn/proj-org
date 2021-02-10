const Model = require('../models');
const TaskModel = Model.TaskModel;

const taskController = {

  createTask(req, res) {
    // console.log('req: ', req);
    const { taskName, description, complete = false } = req.body;
    TaskModel
      .create({taskName, description, complete})
      .then((data) => {
        console.log('/// Created task data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error creating/POST-ing task'});
      });

  },

  getAllTasks(req, res) {
    TaskModel
      .find()
      .then((data) => {
        console.log('/// Found all task data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error finding/GET-ing all task data'});
      });

  },

  getTask(req, res) {
    TaskModel
      .find({taskName: req.params.taskName})
      .then((data) => {
        console.log('/// Found task data: ', data);
        // return JUST THE FIRST of the array! (if multiple w/ same title)
        return res.status(200).send(data[0]);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error finding/GET-ing task data'});
      });

  },

  updateTask(req, res) {
    const { taskName, description } = req.body;
    TaskModel
      .findOneAndUpdate({taskName: req.params.taskName}, {taskName, description}, {new: true})
      .then((data) => {
        console.log('req.params.taskName: ', req.params.taskName);
        console.log('/// Updated task data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error updating/PATCH-ing all task data'});
      });

  },

  deleteTask(req, res) {
    TaskModel
      .findOneAndDelete({taskName: req.params.taskName})
      .then((data) => {
        console.log('/// Deleted task data: ', data);
        return res.status(200).send(data);
      })
      .catch((err) => {
        return res.status(404).send({err: 'Error DELETE-ing all task data'});
      });
  }
}

module.exports = taskController;