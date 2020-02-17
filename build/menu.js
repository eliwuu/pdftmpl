"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
const menuItems_1 = require("./menuItems");
class Menu {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.templateMenu).then(answers => {
                return answers;
            });
            const elements = data["elements"];
            const template = {
                git: data["git_repo"],
                author: data["author"],
                name: data["name"]
            };
            const layout = {
                pageSize: data["pageSize"],
                margins: {
                    marginBottom: +data["marginBottom"],
                    marginTop: +data["marginTop"],
                    marginLeft: +data["marginLeft"],
                    marginRight: +data["marginRight"],
                },
                orientation: data["orientation"],
                unit: data["unit"],
                dpi: data["dpi"]
            };
            const section = {
                header: elements.includes("Header"),
                footer: elements.includes("Footer"),
                content: elements.includes("Content"),
                headerHeight: +data["headerHeight"],
                footerHeight: +data["footerHeight"],
                autoNumbering: data["autoNumbering"]
            };
            return { template: template, layout: layout, section: section };
        });
    }
}
exports.default = Menu;
