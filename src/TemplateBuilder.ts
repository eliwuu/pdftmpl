import Menu from "./menu";
import path from "path";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import Css from "./cssBuilder";
import { Html } from "./htmlBuilder";
import { subst } from "./subst";
import { gitAdd, gitInit } from "./giti.init";

export default class TemplateBuilder {
  static async Make(cwd: string) {
    const pkg = await Menu.initFull();

    const templatePath = path.join(cwd, pkg.name);

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
    if (pkg.includes?.header) {
      writeFileSync(
        path.join(cssPath, "header.css"),
        Css.MakeBlock(
          pkg.template!.layout,
          pkg.template!.section.headerHeight,
          "header"
        ).css
      );
      writeFileSync(path.join(jsPath, "header.js"), "");
      writeFileSync(
        path.join(templatePath, "header.html"),
        Html.MakeBlock(pkg.template!.section.autoNumbering, "header")
      );
    }
    if (pkg.includes?.footer) {
      writeFileSync(
        path.join(cssPath, "footer.css"),
        Css.MakeBlock(
          pkg.template!.layout,
          pkg.template!.section.headerHeight,
          "footer"
        ).css
      );
      writeFileSync(path.join(jsPath, "footer.js"), "");
      writeFileSync(
        path.join(templatePath, "footer.html"),
        Html.MakeBlock(pkg.template!.section.autoNumbering, "footer")
      );
    }
    if (pkg.includes?.content) {
      writeFileSync(
        path.join(cssPath, "content.css"),
        Css.MakeContent(pkg.template!.layout).css
      );
      writeFileSync(path.join(jsPath, "content.js"), "");
      writeFileSync(
        path.join(templatePath, "content.html"),
        Html.MakeContent(pkg.name)
      );
    }
    if (pkg.template?.section.autoNumbering) {
      writeFileSync(path.join(jsPath, "subst.js"), subst);
    }
    writeFileSync(
      path.join(templatePath, "settings.json"),
      JSON.stringify(pkg)
    );

    if (pkg.git) {
      gitInit(pkg.name);
      gitAdd(pkg.name);
    }
  }
}
