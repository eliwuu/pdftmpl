interface Package {
  git?: boolean;
  author: string;
  name: string;
  mode: Mode;
  isGeneric?: boolean;
}

interface Layout {
  pageSize: string;
  margins: Margin;
  orientation: Orientation;
  unit: Unit;
  dpi: Dpi;
}

interface Section {
  header: boolean;
  headerHeight: number;
  content: boolean;
  footer: boolean;
  footerHeight: number;
  autoNumbering: boolean;
}

interface Margin {
  marginTop: number;
  marginBottom: number;
  marginRight: number;
  marginLeft: number;
}

interface Settings {
  template: Package;
  layout: Layout;
  section: Section;
}

type Dpi =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1100
  | 1200;
type Unit = "px" | "mm" | "cm" | "in";
type Orientation = "portrait" | "landscape";
type Mode = "inline" | "url" | "content";

export {
  Package,
  Layout,
  Section,
  Margin,
  Settings,
  Dpi,
  Unit,
  Orientation,
  Mode,
};
