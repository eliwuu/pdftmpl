import { pageSizeList } from "../pageSize";

export const template = [
    {
        type: "confirm",
        name: "git_repo",
        message: "Initialize Git Repository? ",
    },
    {
        type: "input",
        name: "author",
        message: "Author: "
    },
    {
        type: "input",
        name: "name",
        message: "Template Name: ",
        validate: function (value: string) {
            if (value.length < 3) {
                return "You need to specify template name";
            }
            return true;
        }
    },
    {
        type: "checkbox",
        name: "elements",
        message: "Select template elements",
        choices: ["Content", "Header", "Footer"],
        validate: function (answer) {
            if (answer.length < 1) {
                return "You must select at least one element";
            }

            return true;
        }
    },
    {
        type: "confirm",
        name: "images",
        message: "Template contain images? "
    },
    {
        type: "confirm",
        name: "js",
        message: "Template contain js scripts? "
    },
    {
        type: "confirm",
        name: "css",
        message: "Template contain css? "
    },
    {
        type: "confirm",
        name: "fonts",
        message: "Template contain fonts? "
    },
    {
        type: "confirm",
        name: "autoNumbering",
        message: "Template use automatic page numbering? "
    }
]

export const layout = [
    {
        type: "list",
        name: "constraint",
        message: "Select template constraints",
        choices: ["Fixed", "Relative"]
    },
    {
        type: "list",
        name: "unit",
        message: "Select template units",
        choices: ["px", "mm", "cm", "in"]
    },
]

export const print = [
    {
        type: "list",
        name: "dpi",
        message: "Select document dpi",
        choices: [100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200]
    },
    {
        type: "input",
        name: "imageQuality",
        message: "Image quality (1...100)",
        validate: (value: number) => {
            if (value > 100 || value < 1) {
                return "image quality must be in range 1...100";
            }

            return true;
        }
    }
]

export const env = [
    {
        type: "list",
        name: "target",
        message: "Select pdf target os",
        choices: ["Mac", "Windows", "Linux"]
    }
]

export const page = [
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

export const menu = [
    // {
    //     type: "list",
    //     name: "origin",
    //     message: "Select your os",
    //     choices: ["Mac", "Windows", "Linux"]
    // },

    // {
    //     type: "input",
    //     name: "dpi",
    //     message: "Set pdf dpi [72-200] (this affects sizes on printed document)"
    // },
    // {
    //     type: "input",
    //     name: "imageQuality",
    //     message: "Set image quality [0-100]"
    // },
    // {
    //     type: "input",
    //     name: "zoom",
    //     message: "Set zoom [0.1 - 3.0] (this affects sizes on printed document)"
    // },

    // {
    //     type: "input",
    //     name: "pageWidth",
    //     message: "Page width (in mm)",
    //     default: function () {
    //         return 210;
    //     }
    // },
    // {
    //     type: "input",
    //     name: "pageHeight",
    //     message: "Page height (in mm)",
    //     default: function () {
    //         return 297;
    //     }
    // },

]

function getPageSizes(): string[] {
    return Object.keys(pageSizeList);
}