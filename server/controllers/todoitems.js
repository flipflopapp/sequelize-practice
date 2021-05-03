const TodoItem = require('../models').TodoItem;
const User = require('../models').User;

module.exports = {
  async create(req, res) {
    let assignedTo;
    if (req.body.username) {
      const user = await User.find({
        where: {
          email: req.body.username
        },
      });
      if (!user) {
        return res.status(400).send('username not found')
      }
      assignedTo = user.id;
    }

    return await TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
        assignedTo,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },

  update(req, res) {
    // TODO update username (or task assigned to user)
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }

        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem Not Found',
          });
        }

        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
