import inquirer = require("inquirer");
import { pageSizeList } from "./pageSize";
import { Page, Env, Environment, Constraints, Unit, Orientation, LayoutSettings, Layout } from "./layoutSettings";
import { layoutMenu } from "./menuItems/layoutMenu";
import { templateMenu } from "./menuItems/templateMenu";
import { Template } from "./templateSettings";

export default class Menu {
    static async initLayout() {
        const data = await inquirer.prompt(layoutMenu).then(answers => {
            return answers;
        });

        console.log(data);

        const env: Env = {
            origin: data["origin"] as Environment,
            target: data["target"] as Environment,
        };

        const layout: Layout = {
            constraint: data["constraint"] as Constraints,
            dpi: data["dpi"] as number,
            imageQuality: data["imageQuality"] as number,
            zoom: data["zoom"] as number,
            unit: data["unit"] as Unit,
        };

        const page = await this.getPage(data);

        const settings: LayoutSettings = { env: env, layout: layout, page: page };

        return settings;
    }

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

        const settings: Template = {
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

        return settings;
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