import inquirer = require("inquirer");
import { templateMenu } from "./menuItems";
import { Template, Layout, Orientation, Unit, Dpi, Section } from "./settings";

export default class Menu {
    static async init() {
        const data = await inquirer.prompt(templateMenu).then(answers => {
            return answers;
        });

        const elements = data["elements"] as string[];

        const template: Template = {
            git: data["git_repo"] as boolean,
            author: data["author"] as string,
            name: data["name"] as string
        }

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
            dpi: data["dpi"] as Dpi
        }

        const section: Section = {
            header: elements.includes("Header"),
            footer: elements.includes("Footer"),
            content: elements.includes("Content"),
            headerHeight: +data["headerHeight"] as number,
            footerHeight: +data["footerHeight"] as number,
            autoNumbering: data["autoNumbering"] as boolean
        }

        return { template: template, layout: layout, section: section };
    }
}