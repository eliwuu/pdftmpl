"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Menu from "../menu";
const pageSize_1 = require("../pageSize");
exports.layoutMenu = [
    {
        type: "list",
        name: "target",
        message: "Select target os",
        choices: ["Mac", "Windows", "Linux"]
    },
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
