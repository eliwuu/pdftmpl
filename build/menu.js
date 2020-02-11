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
const layoutMenu_1 = require("./menuItems/layoutMenu");
const templateMenu_1 = require("./menuItems/templateMenu");
class Menu {
    static initLayout() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(layoutMenu_1.layoutMenu).then(answers => {
                return answers;
            });
            console.log(data);
            const env = {
                origin: data["origin"],
                target: data["target"],
            };
            const layout = {
                constraint: data["constraint"],
                dpi: data["dpi"],
                imageQuality: data["imageQuality"],
                zoom: data["zoom"],
                unit: data["unit"],
            };
            const page = yield this.getPage(data);
            const settings = { env: env, layout: layout, page: page };
            return settings;
        });
    }
    static initTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield inquirer.prompt(templateMenu_1.templateMenu).then(answers => {
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
            const settings = {
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
            return settings;
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
