// import Menu from "../menu";
import { pageSizeList } from "../pageSize";

export const layoutMenu = [
    

    {
        type: "list",
        name: "page",
        message: "Select template page size",
        choices: getPageSizes()
    },
    {
        type: "list",
        name: "orientation",
        message: "Select document orientation",
        choices: ["portrait", "landscape"]
    },
]

function getPageSizes(): string[] {
    return Object.keys(pageSizeList);
}