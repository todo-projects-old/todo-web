'use strict';

let tasks = [
    {
        id: 1,
        name: "Test task 1",
        desc: "Description test task",
        user: "xx",
        context: "home"
    },
    {
        id: 2,
        name: "Some new task with long text as name",
        desc: "Description Some new task with long text as name",
        user: "xx",
        context: "street",
        status: "set"
    },
    {
        id: 3,
        name: "Other done task",
        desc: "Description Some new task with long text as name",
        user: "xx",
        context: "street",
        status: "done"
    }
];

exports.list = function(req, res) {
    res.render('index', { title: 'Todo web', tasks });
};