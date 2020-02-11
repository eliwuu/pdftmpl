export const templateMenu = [
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