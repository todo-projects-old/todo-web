'use strict';

const hbs = require('hbs');
const path = require('path');

let ui = {
    marker: {
        styles: [
            {
                attr: {
                    status: "set"
                },
                style: "danger"
            },
            {
                attr: {
                    status: "done"
                },
                style: "success"
            }
        ]
    }
};

hbs.registerHelper('marker_class', function(task, options) {
    console.log(task);
    for (let attr in task) {
        for (let item of ui.marker.styles) {
            for (let name in item.attr) {
                if (attr === name && task[attr] === item.attr[name]) {
                    return new hbs.SafeString("callout callout-" + item.style + " ");
                }
            }
        }
    }
});

hbs.registerHelper('ifAttr', function(task, name, value, options) {
    for (let attr in task) {
        if (attr === name && task[attr] === value) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
});

hbs.registerHelper('ifIn', function() {
    let value = arguments[0];
    let array = Array.prototype.slice.call(arguments, 1, -1);
    let options = arguments[arguments.length - 1];

    if (array.indexOf(value) >= 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});

hbs.registerHelper('ifNotIn', function() {
    let value = arguments[0];
    let array = Array.prototype.slice.call(arguments, 1, -1);
    let options = arguments[arguments.length - 1];

    if (array.indexOf(value) < 0) {
        return options.fn(this);
    }
    return options.inverse(this);
});

module.exports = hbs;