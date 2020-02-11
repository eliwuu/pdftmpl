import inquirer = require("inquirer");
import { pageSizeList } from "./pageSize";
import { Page, Env, Environment, Constraints, Unit, Orientation, Template, Print, Layout, Dpi } from "./settings";
import { templateMenu, layoutMenu, printMenu, envMenu, pageMenu } from "./menuItems";

export default class Menu {
    static async initTemplate() {
        const data = await inquirer.prompt(templateMenu).then(answers => {
            return answers;
        });

        console.log(data);

        const elements = data["elements"] as string[];

        const git = data["git_repo"] as boolean;

        const author = data["author"] as string;
        const name = data["name"] as string;
        const header = elements.includes("Header");
        const footer = elements.includes("Footer");
        const content = elements.includes("Content");
        const images = data["images"] as boolean;
        const js = data["js"] as boolean;
        const css = data["css"] as boolean;
        const fonts = data["fonts"] as boolean;
        const autoNumbering = data["autoNumbering"] as boolean;

        const template: Template = {
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
        }

        return template;
    }
    static async initLayout() {
        const data = await inquirer.prompt(layoutMenu).then(answers => {
            return answers;
        });
        const layout: Layout = {
            constraint: data["constraint"] as Constraints,
            unit: data["unit"] as Unit,
        };

        return layout;
    }

    static async initPrint() {
        const data = await inquirer.prompt(printMenu).then(answers => {
            return answers;
        });

        const print: Print = {
            dpi: data["dpi"] as Dpi,
            imageQuality: data["imageQuality"] as number,
            zoom: 1
        }

        return print;
    }

    static async initEnv() {
        const data = await inquirer.prompt(envMenu).then(answers => {
            return answers;
        });

        const env: Env = {
            target: data["target"] as Environment,
            origin:  "Headless"
        }

        return env;
    }

    static async initPage() {
        const data = await inquirer.prompt(pageMenu).then(answers => {
            return answers;
        });

        return this.getPage(data);
    }

    static async getPage(data: any): Promise<Page> {
        const page: Page = {
            name: data["page"] as string,
            width: (data["orientation"] as string) === "portrait" ? pageSizeList[data["page"] as string].width : pageSizeList[data["page"] as string].height,
            height: (data["orientation"] as string) === "portrait" ? pageSizeList[data["page"] as string].height : pageSizeList[data["page"] as string].width,
            orientation: data["orientation"] as Orientation
        };

        return page;
    }
}