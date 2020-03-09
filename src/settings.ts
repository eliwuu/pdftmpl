export interface Template {
    git?: boolean;
    author: string;
    name: string;
    type: TemplateType;
    isGeneric?: boolean;
}

export interface Layout {
    pageSize: string;
    margins: Margin;
    orientation: Orientation;
    unit: Unit;
    dpi: Dpi;
}

export interface Section {
    header: boolean;
    headerHeight: number;
    content: boolean;
    footer: boolean;
    footerHeight: number;
    autoNumbering: boolean;
}

export interface Margin {
    marginTop: number;
    marginBottom: number;
    marginRight: number;
    marginLeft: number;
}


export interface Settings {
    template: Template;
    layout: Layout;
    section: Section;
}

export type Dpi = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000 | 1100 | 1200;
export type Unit = "px" | "mm" | "cm" | "in";
export type Orientation = "portrait" | "landscape";
export type TemplateType = "Full" | "Url" | "Inline";

