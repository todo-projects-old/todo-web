'use strict';

const hbs = require('hbs');
const path = require('path');

let ui = {
    marker: {
        styles: [
            {
                attr: {
                    name: "status",
                    value: "set"
                },
                style: "danger"
            },
            {
                attr: {
                    name: "status",
                    value: "done"
                },
                style: "success"
            }
        ]
    }
};

hbs.registerHelper('marker_class', function(attrs, options) {
    for (let attr of attrs) {
        for (let item of ui.marker.styles) {
            if (attr.name === item.attr.name && attr.value === item.attr.value) {
                return new hbs.SafeString("callout callout-" + item.style + " ");
            }
        }
    }
});

hbs.registerHelper('ifAttr', function(attrs, name, value, options) {
    for (let attr of attrs) {
        if (attr.name === name && attr.value === value) {
            return options.fn(this);
        }
    }
    return options.inverse(this);
});

module.exports = hbs;