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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const data = yield menu_1.default.init();
        data.section.header ? fs_1.writeFileSync(path.join(cwd, "header.css"), cssBuilder_1.default.MakeBlock(data.layout, data.section.headerHeight, "header")) : null;
        data.section.footer ? fs_1.writeFileSync(path.join(cwd, "footer.css"), cssBuilder_1.default.MakeBlock(data.layout, data.section.footerHeight, "footer")) : null;
        data.section.content ? fs_1.writeFileSync(path.join(cwd, "content.css"), cssBuilder_1.default.MakeContent(data.layout)) : null;
        fs_1.writeFileSync(path.join(cwd, "settings.json"), JSON.stringify(data));
    });
}
main();
