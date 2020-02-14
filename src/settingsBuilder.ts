import { Template, Layout, Constraints, Unit, Print, Dpi, Env, Environment, Orientation, Page } from "./settings";
import { pageSizeList } from "./pageSize";
import * as os from 'os';

export default class settings {
    static makeTemplate(data: any) {

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

    static makeLayout(data: any) {
        const layout: Layout = {
            constraint: data["constraint"] as Constraints,
            unit: data["unit"] as Unit,
        };

        return layout;
    }

    static makePrint(data: any) {
        const print: Print = {
            dpi: data["dpi"] as Dpi,
            imageQuality: data["imageQuality"] as number,
            zoom: 1
        }

        return print;
    }

    static makeEnv(data: any) {
        const env: Env = {
            target: data["target"] as Environment,
            origin: this.setOrigin()
        }

        return env;
    }

    static makePage(data: any) {
        const page: Page = {
            name: data["page"] as string,
            width: (data["orientation"] as string) === "portrait" ? pageSizeList[data["page"] as string].width : pageSizeList[data["page"] as string].height,
            height: (data["orientation"] as string) === "portrait" ? pageSizeList[data["page"] as string].height : pageSizeList[data["page"] as string].width,
            orientation: data["orientation"] as Orientation,
        };

        return page;
    }

    static makeMargins(data: any) {
        const margins = {
            marginBottom: data["marginBottom"] as number,
            marginTop: data["marginTop"] as number,
            marginLeft: data["marginLeft"] as number,
            marginRight: data["marginLeft"] as number,
        }
        const footer = {
            height: data["footerHeight"] as number,
            spacing: data["footerSpacing"] as number
        }
        const header = {
            height: data["headerHeight"] as number,
            spacing: data["headerSpacing"] as number
        }
    }

    private static setOrigin() {
        const currentOs = os.platform();

        let origin: Environment;

        switch (currentOs) {
            case "darwin":
                origin = "Mac";
                break;
            case "win32":
                origin = "Windows";
                break;
            case "linux":
                origin = "Linux";
                break;
            default:
                origin = "Headless";

        }
        return origin;
    }

    private static setDpi(env: Env) {

    }
}