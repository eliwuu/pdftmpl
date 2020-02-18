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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const menu_1 = __importDefault(require("./menu"));
const cssBuilder_1 = __importDefault(require("./cssBuilder"));
const htmlBuilder_1 = __importDefault(require("./htmlBuilder"));
const subst_1 = require("./subst");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const data = yield menu_1.default.init();
        const templatePath = path.join(cwd, data.template.name);
        const cssPath = path.join(templatePath, "css");
        const jsPath = path.join(templatePath, "js");
        const imgPath = path.join(templatePath, "img");
        const fontsPath = path.join(templatePath, "fonts");
        if (!fs_1.existsSync(templatePath)) {
            fs_1.mkdirSync(templatePath);
        }
        if (!fs_1.existsSync(jsPath)) {
            fs_1.mkdirSync(jsPath);
        }
        if (!fs_1.existsSync(cssPath)) {
            fs_1.mkdirSync(cssPath);
        }
        if (!fs_1.existsSync(imgPath)) {
            fs_1.mkdirSync(imgPath);
        }
        if (!fs_1.existsSync(fontsPath)) {
            fs_1.mkdirSync(fontsPath);
        }
        if (data.section.header) {
            fs_1.writeFileSync(path.join(cssPath, "header.css"), cssBuilder_1.default.MakeBlock(data.layout, data.section.headerHeight, "header").css);
            fs_1.writeFileSync(path.join(jsPath, "header.js"), "");
            fs_1.writeFileSync(path.join(templatePath, "header.html"), htmlBuilder_1.default.MakeBlock(data.section.autoNumbering, "header"));
        }
        if (data.section.footer) {
            fs_1.writeFileSync(path.join(cssPath, "footer.css"), cssBuilder_1.default.MakeBlock(data.layout, data.section.headerHeight, "footer").css);
            fs_1.writeFileSync(path.join(jsPath, "footer.js"), "");
            fs_1.writeFileSync(path.join(templatePath, "footer.html"), htmlBuilder_1.default.MakeBlock(data.section.autoNumbering, "footer"));
        }
        if (data.section.content) {
            fs_1.writeFileSync(path.join(cssPath, "content.css"), cssBuilder_1.default.MakeContent(data.layout).css);
            fs_1.writeFileSync(path.join(jsPath, "content.js"), "");
            fs_1.writeFileSync(path.join(templatePath, "content.html"), htmlBuilder_1.default.MakeContent(data.template.name));
        }
        if (data.section.autoNumbering) {
            fs_1.writeFileSync(path.join(jsPath, "subst.js"), subst_1.subst);
        }
        fs_1.writeFileSync(path.join(templatePath, "settings.json"), JSON.stringify(data));
    });
}
main();
