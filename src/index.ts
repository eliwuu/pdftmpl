import gitInit from "./gitInit";
import TemplateBuilder from "./TemplateBuilder";

async function main() {
    const cwd = process.cwd();

    await gitInit(cwd);
    await TemplateBuilder.Make(cwd);
}

main();

