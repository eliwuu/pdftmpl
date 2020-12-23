import inquirer = require("inquirer");
import { templateMenu } from "./menuItems";
import {
  Package,
  Layout,
  Orientation,
  Unit,
  Dpi,
  Section,
  Mode,
} from "./settings";

export default class Menu {
  static async initFull() {
    const data = await inquirer.prompt(templateMenu).then((answers) => {
      return answers;
    });

    const elements = data["elements"] as string[];

    const pkg: Package = {
      // git: data["git_repo"] as boolean,
      author: data["author"] as string,
      name: data["name"] as string,
      mode: data["templateType"] as Mode,
    };

    const layout: Layout = {
      pageSize: data["pageSize"] as string,
      margins: {
        marginBottom: +data["marginBottom"] as number,
        marginTop: +data["marginTop"] as number,
        marginLeft: +data["marginLeft"] as number,
        marginRight: +data["marginRight"] as number,
      },
      orientation: data["orientation"] as Orientation,
      unit: data["unit"] as Unit,
      dpi: data["dpi"] as Dpi,
    };

    const section: Section = {
      header: elements.includes("Header"),
      footer: elements.includes("Footer"),
      content: (data["templateType"] as Mode) === "content" ? true : false,
      headerHeight: elements.includes("Header")
        ? (+data["headerHeight"] as number)
        : 0,
      footerHeight: elements.includes("Footer")
        ? (+data["footerHeight"] as number)
        : 0,
      autoNumbering: data["autoNumbering"] as boolean,
    };

    return { template: pkg, layout: layout, section: section };
  }
}
