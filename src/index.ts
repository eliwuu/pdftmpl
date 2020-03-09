import TemplateBuilder from "./TemplateBuilder";

async function main() {
    const cwd = process.cwd();

    const initMenu = await TemplateBuilder.Make(cwd);
}

main();

