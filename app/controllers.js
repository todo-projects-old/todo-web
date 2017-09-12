'use strict';

let tasks = [
    {
        id: 1,
        name: "Test task 1",
        desc: "Description test task",
        attrs: [
            {
                name: "user",
                value: "xx"
            },
            {
                name: "context",
                value: "home"
            }
        ]
    },
    {
        id: 2,
        name: "Some new task with long text as name",
        desc: "Description Some new task with long text as name",
        attrs: [
            {
                name: "user",
                value: "xx"
            },
            {
                name: "context",
                value: "street"
            },
            {
                name: "status",
                value: "set"
            }
        ]
    },
    {
        id: 3,
        name: "Other done task",
        desc: "Description Some new task with long text as name",
        attrs: [
            {
                name: "user",
                value: "xx"
            },
            {
                name: "context",
                value: "street"
            },
            {
                name: "status",
                value: "done"
            }
        ]
    }
];

exports.list = function(req, res) {
    res.render('index', { title: 'Todo web', tasks });
};