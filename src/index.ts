import { writeFileSync } from "fs";
import * as os from 'os';
import path = require("path");
import Menu from "./menu";
import { Environment, LayoutSettings } from "./layoutSettings";

async function main() {
    const cwd = process.cwd();
    const currentOs = os.platform();

    const template = await Menu.initTemplate();

    const layout = await Menu.initLayout();

    const defaults = setDefaultSettings(currentOs);

    layout.env.origin = defaults.origin;
    layout.layout.dpi = defaults.dpi;
    layout.layout.zoom = defaults.zoom;

    writeFileSync(path.join(cwd, "settings.json"), JSON.stringify({template, layout}));
}

main();

function setDefaultSettings(currentOs: NodeJS.Platform) {
    console.log(currentOs);

    let origin: Environment;
    let zoom: number;
    let dpi: number;

    switch (currentOs) {
        case "darwin":
            origin = "Mac";
            // settings for retina mac
            zoom = 96 / 300;
            dpi = 300;
            break;
        case "win32":
            origin = "Windows";
            dpi = 96;
            zoom = 1;
            break;
        case "linux":
            origin = "Linux";
            dpi = 96;
            zoom = 1;
            break;
        default:
            origin = "Headless";
            dpi = 96;
            zoom = 1;
            break;
    }

    return { origin: origin, dpi: dpi, zoom: zoom };
}