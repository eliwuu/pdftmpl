import TemplateBuilder from "./TemplateBuilder";

async function main() {
    const cwd = process.cwd();

    await TemplateBuilder.Make(cwd);
}

main();

