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
        type: "confirm",
        name: "images",
        message: "Template contain images? "
    },
    {
        type: "confirm",
        name: "js",
        message: "Template contain js scripts? "
    },
    {
        type: "confirm",
        name: "css",
        message: "Template contain css? "
    },
    {
        type: "confirm",
        name: "fonts",
        message: "Template contain fonts? "
    },
    {
        type: "confirm",
        name: "autoNumbering",
        message: "Template use automatic page numbering? "
    }
];
exports.layoutMenu = [
    {
        type: "list",
        name: "constraint",
        message: "Select template constraints",
        choices: ["Fixed", "Relative"]
    },
    {
        type: "list",
        name: "unit",
        message: "Select template units",
        choices: ["px", "mm", "cm", "in"]
    },
];
exports.printMenu = [
    {
        type: "list",
        name: "dpi",
        message: "Select document dpi",
        choices: [100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200]
    },
    {
        type: "input",
        name: "imageQuality",
        message: "Image quality (1...100)",
        validate: (value) => {
            if (value > 100 || value < 1) {
                return "image quality must be in range 1...100";
            }
            return true;
        }
    }
];
exports.envMenu = [
    {
        type: "list",
        name: "target",
        message: "Select pdf target os",
        choices: ["Mac", "Windows", "Linux"]
    }
];
exports.pageMenu = [
    {
        type: "list",
        name: "page",
        message: "Select template page size",
        choices: getPageSizes()
    },
    {
        type: "list",
        name: "orientation",
        message: "Select document orientation",
        choices: ["portrait", "landscape"]
    },
];
function getPageSizes() {
    return Object.keys(pageSize_1.pageSizeList);
}
