import { writeFileSync } from "fs";
import * as os from 'os';
import path = require("path");
import Menu from "./menu";
import { Env, Environment } from "./settings";

async function main() {
    const cwd = process.cwd();
    const currentOs = os.platform();

    const template = await Menu.initTemplate();

    const layout = await Menu.initLayout();

    const print = await Menu.initPrint();

    const page = await Menu.initPage()

    const env = await Menu.initEnv();

    const dpi = setDpi(env, currentOs);

    env.origin = dpi.origin;

    print.zoom = dpi.zoom;

    writeFileSync(path.join(cwd, "settings.json"), JSON.stringify({ template, layout, print, page, env }));
}

main();

function setDpi(env: Env, currentOs: NodeJS.Platform) {

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

    const zoomOrigin = origin === "Mac" && env.target != "Mac" ? 110 / 96 : null;
    const zoomTarget = env.target === "Mac" && origin != "Mac" ? 96 / 110 : 1;

    const zoom = zoomOrigin === null ? zoomTarget : zoomOrigin;

    return { zoom: zoom, origin: origin };
}