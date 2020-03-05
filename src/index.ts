import { writeFileSync, existsSync, mkdirSync } from "fs";
import path = require("path");
import Menu from "./menu";
import Css from "./cssBuilder";
import Html from "./htmlBuilder";
import { subst } from "./subst";
import TemplateBuilder from "./TemplateBuilder";

async function main() {
    const cwd = process.cwd();

    const initMenu = await Menu.init();

    switch (initMenu) {
        case "Full":
            await TemplateBuilder.MakeFullTemplate(cwd);
            break;
        case "Url":
            await TemplateBuilder.MakeUrlTemplate(cwd);
            break;
        case "Inline":
            await TemplateBuilder.MakeInlineTemplate(cwd);
            break;
    }
}

main();

