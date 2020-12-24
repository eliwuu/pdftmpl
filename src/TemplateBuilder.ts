import Menu from "./menu";
import path = require("path");
import { existsSync, mkdirSync, writeFileSync } from "fs";
import Css from "./cssBuilder";
import Html from "./htmlBuilder";
import { subst } from "./subst";
import { chdir } from "process";
import { gitAdd, gitInit } from "./giti.init";

export default class TemplateBuilder {
    static async Make(cwd: string) {
        
        const data = await Menu.initFull();
        
        const templatePath = path.join(cwd, data.template.name);
        
        const cssPath = path.join(templatePath, "css");
        const jsPath = path.join(templatePath, "js");
        const imgPath = path.join(templatePath, "img");
        const fontsPath = path.join(templatePath, "fonts");
        
        if (!existsSync(templatePath)) {
            mkdirSync(templatePath);
        }
        if (!existsSync(jsPath)) {
            mkdirSync(jsPath);
        }
        if (!existsSync(cssPath)) {
            mkdirSync(cssPath);
        }
        if (!existsSync(imgPath)) {
            mkdirSync(imgPath);
        }
        if (!existsSync(fontsPath)) {
            mkdirSync(fontsPath);
        }
        if (data.section.header) {
            writeFileSync(path.join(cssPath, "header.css"), Css.MakeBlock(data.layout, data.section.headerHeight, "header").css);
            writeFileSync(path.join(jsPath, "header.js"), "");
            writeFileSync(path.join(templatePath, "header.html"), Html.MakeBlock(data.section.autoNumbering, "header"));
        }
        if (data.section.footer) {
            writeFileSync(path.join(cssPath, "footer.css"), Css.MakeBlock(data.layout, data.section.headerHeight, "footer").css);
            writeFileSync(path.join(jsPath, "footer.js"), "");
            writeFileSync(path.join(templatePath, "footer.html"), Html.MakeBlock(data.section.autoNumbering, "footer"));
        }
        if (data.section.content) {
            writeFileSync(path.join(cssPath, "content.css"), Css.MakeContent(data.layout).css);
            writeFileSync(path.join(jsPath, "content.js"), "");
            writeFileSync(path.join(templatePath, "content.html"), Html.MakeContent(data.template.name));
        }
        if (data.section.autoNumbering) {
            writeFileSync(path.join(jsPath, "subst.js"), subst);
        }
        writeFileSync(path.join(templatePath, "settings.json"), JSON.stringify(data));

        if (data.template.git) {
            gitInit(data.template.name);
            gitAdd(data.template.name);
        }
    }
}