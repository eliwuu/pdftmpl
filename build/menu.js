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
const pageSize_1 = require("./pageSize");
const menuItems_1 = require("./menuItems");
class Menu {
    static initTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.templateMenu).then(answers => {
                return answers;
            });
            console.log(data);
            const elements = data["elements"];
            const git = data["git_repo"];
            const author = data["author"];
            const name = data["name"];
            const header = elements.includes("Header");
            const footer = elements.includes("Footer");
            const content = elements.includes("Content");
            const images = data["images"];
            const js = data["js"];
            const css = data["css"];
            const fonts = data["fonts"];
            const autoNumbering = data["autoNumbering"];
            const template = {
                git: git,
                author: author,
                name: name,
                header: header,
                footer: footer,
                content: content,
                images: images,
                js: js,
                css: css,
                fonts: fonts,
                autoNumbering: autoNumbering,
            };
            return template;
        });
    }
    static initLayout() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.layoutMenu).then(answers => {
                return answers;
            });
            const layout = {
                constraint: data["constraint"],
                unit: data["unit"],
            };
            return layout;
        });
    }
    static initPrint() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.printMenu).then(answers => {
                return answers;
            });
            const print = {
                dpi: data["dpi"],
                imageQuality: data["imageQuality"],
                zoom: 1
            };
            return print;
        });
    }
    static initEnv() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.envMenu).then(answers => {
                return answers;
            });
            const env = {
                target: data["target"],
                origin: "Headless"
            };
            return env;
        });
    }
    static initPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(menuItems_1.pageMenu).then(answers => {
                return answers;
            });
            return this.getPage(data);
        });
    }
    static getPage(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = {
                name: data["page"],
                width: data["orientation"] === "portrait" ? pageSize_1.pageSizeList[data["page"]].width : pageSize_1.pageSizeList[data["page"]].height,
                height: data["orientation"] === "portrait" ? pageSize_1.pageSizeList[data["page"]].height : pageSize_1.pageSizeList[data["page"]].width,
                orientation: data["orientation"]
            };
            return page;
        });
    }
}
exports.default = Menu;
