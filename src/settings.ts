export interface Template {
    git?: boolean
    author: string,
    name: string,
    header: boolean,
    content: boolean,
    footer: boolean,
    images: boolean,
    js: boolean,
    css: boolean,
    fonts: boolean,
    autoNumbering: boolean,
}

export interface Env {
    origin: Environment,
    target: Environment
}

export interface Layout {
    constraint: Constraints,
    unit: Unit
}

export interface Margin {
    marginTop: number,
    marginBottom: number,
    marginRight: number,
    marginLeft: number,
}

export interface Block {
    height: number
    spacing: number
}

export interface Print {
    dpi: Dpi,
    zoom: number,
    imageQuality: number,
}

export interface Page {
    name?: string,
    width: number,
    height: number,
    orientation: Orientation,
    margins?: Margin,
    footer?: Block,
    header?: Block
}

export interface Settings {
    template: Template,
    env: Env,
    layout: Layout,
    print: Print,
    page: Page
}

export type Unit = "px" | "mm" | "cm" | "in";
export type Orientation = "portrait" | "landscape";
export type Environment = "Mac" | "Windows" | "Linux" | "Headless";
export type Constraints = "Fixed" | "Relative";

export type Dpi = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200;
