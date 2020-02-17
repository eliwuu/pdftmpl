import { writeFileSync } from "fs";
import path = require("path");
import Menu from "./menu";
import Css from "./cssBuilder";

async function main() {
    const cwd = process.cwd();

    const data = await Menu.init();

    data.section.header ? writeFileSync(
        path.join(cwd, "header.css"), 
        Css.MakeBlock(data.layout, data.section.headerHeight, "header")) : null;
    data.section.footer ? writeFileSync(
        path.join(cwd, "footer.css"), 
        Css.MakeBlock(data.layout, data.section.footerHeight, "footer")) : null;

    data.section.content ? writeFileSync(
        path.join(cwd, "content.css"),
        Css.MakeContent(data.layout)) : null;

    

    writeFileSync(path.join(cwd, "settings.json"), JSON.stringify(data));
}

main();
