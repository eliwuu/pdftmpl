"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const os = __importStar(require("os"));
const path = require("path");
const menu_1 = __importDefault(require("./menu"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const cwd = process.cwd();
        const template = yield menu_1.default.initTemplate();
        const layout = yield menu_1.default.initLayout();
        const defaults = setDefaultSettings();
        layout.env.origin = defaults.origin;
        layout.layout.dpi = defaults.dpi;
        layout.layout.zoom = defaults.zoom;
        fs_1.writeFileSync(path.join(cwd, "settings.json"), JSON.stringify({ template, layout }));
    });
}
main();
function setDefaultSettings() {
    const currentOs = os.platform();
    console.log(currentOs);
    let origin;
    let zoom;
    let dpi;
    switch (currentOs) {
        case "darwin":
            origin = "Mac";
            // settings for retina mac
            zoom = 96 / 300;
            dpi = 300;
        case "win32":
            origin = "Windows";
            dpi = 96;
            zoom = 1;
        case "linux":
            console.log(" in linux");
            origin = "Linux";
            dpi = 96;
            zoom = 1;
        default:
            console.log("default");
            origin = "Headless";
            dpi = 96;
            zoom = 1;
    }
    return { origin: origin, dpi: dpi, zoom: zoom };
}
