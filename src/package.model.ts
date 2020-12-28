interface Package {
  name: string;
  version: string;
  includes?: {
    footer?: boolean;
    header?: boolean;
    content?: boolean;
    js?: boolean;
    css?: boolean;
    img?: boolean;
  };
  mode: Mode;
  template?: {
    layout: Layout;
    section: Section;
  };
  author: string;
  git: boolean;
}

interface ZipPackage extends Package {
  zipChecksum: string;
  uncompressedChecksum: string;
  fileManifest: { folder: string; files: string[] }[];
  user: { username: string; key: string; email: string };
}

interface Audit {
  isAudited: boolean;
  auditor: { username: string; email: string; role: string };
  auditDate?: Date;
  name: string;
  version: string;
  author: { username: string; email: string; role: string };
}

interface Layout {
  pageSize: string;
  margins: Margin;
  orientation: Orientation;
  unit: Unit;
  dpi: Dpi;
}

interface Section {
  headerHeight: number;
  footerHeight: number;
  autoNumbering: boolean;
}

interface Margin {
  marginTop: number;
  marginBottom: number;
  marginRight: number;
  marginLeft: number;
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
type Mode = "content" | "url" | "inline";

export {
  Package,
  ZipPackage,
  Section,
  Margin,
  Dpi,
  Layout,
  Unit,
  Orientation,
  Mode,
};
