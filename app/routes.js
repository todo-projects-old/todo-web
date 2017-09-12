'use strict';

module.exports = function(app) {
    var controllers = require('./controllers');

    app.route('/')
        .get(controllers.list);

    // app.route('/tasks/:taskId')
    //     .get(todoList.read_a_task)
    //     .put(todoList.update_a_task)
    //     .delete(todoList.delete_a_task);
};