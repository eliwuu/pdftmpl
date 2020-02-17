"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageSize_1 = require("./pageSize");
exports.templateMenu = [
    {
        type: "confirm",
        name: "git_repo",
        message: "Initialize Git Repository? ",
    },
    {
        type: "input",
        name: "author",
        message: "Author: "
    },
    {
        type: "input",
        name: "name",
        message: "Template Name: ",
        validate: function (value) {
            if (value.length < 3) {
                return "You need to specify template name";
            }
            return true;
        }
    },
    {
        type: "list",
        name: "pageSize",
        message: "Select template page size",
        choices: getPageSizes(),
    },
    {
        type: "input",
        name: "marginTop",
        message: "Top margin (mm)",
        default: 5,
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "input",
        name: "marginBottom",
        message: "Bottom margin (mm)",
        default: 5,
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "input",
        name: "marginLeft",
        message: "Left margin (mm)",
        default: 5,
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "input",
        name: "marginRight",
        message: "Right margin (mm)",
        default: 5,
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "list",
        name: "orientation",
        message: "Select document orientation",
        choices: ["portrait", "landscape"]
    },
    {
        type: "list",
        name: "unit",
        message: "Select template units",
        choices: ["px", "mm", "cm", "in"],
        default: "px"
    },
    {
        type: "list",
        name: "dpi",
        message: "Select document dpi",
        choices: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        default: 300
    },
    {
        type: "checkbox",
        name: "elements",
        message: "Select template elements",
        choices: ["Content", "Header", "Footer"],
        validate: function (answer) {
            if (answer.length < 1) {
                return "You must select at least one element";
            }
            return true;
        }
    },
    {
        type: "input",
        name: "headerHeight",
        message: "Header height (mm)",
        when: (answers) => answers.elements.includes("Header"),
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "input",
        name: "footerHeight",
        message: "Footer height (mm)",
        when: (answers) => answers.elements.includes("Footer"),
        validate: (value) => {
            return marginIsNumber(value);
        }
    },
    {
        type: "confirm",
        name: "autoNumbering",
        message: "Template use automatic page numbering? "
    },
];
function getPageSizes() {
    return Object.keys(pageSize_1.pageSizeList);
}
function marginIsNumber(value) {
    const parse = Number.parseFloat(value);
    if (Number.isNaN(parse)) {
        return "Margin must be a number";
    }
    return true;
}
