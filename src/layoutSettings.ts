export type Unit = "px" | "mm" | "cm" | "in";
export type Orientation = "portrait" | "landscape";
export type Environment = "Mac" | "Windows" | "Linux" | "Headless";
export type Constraints = "Fixed" | "Relative";

export type Dpi = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200;


export interface Env {
    origin: Environment,
    target: Environment
}

export interface Layout {
    constraint: Constraints,
    unit: Unit
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
    orientation: Orientation
}

export interface LayoutSettings {
    env: Env,
    layout: Layout,
    page: Page,
    print: Print
}