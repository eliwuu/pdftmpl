import { Dpi, Layout } from "./package.model";
import { pageSizeList } from "./pageSize";

export default class Css {
  static MakeContent(layout: Layout) {
    const widthOrientation =
      layout.orientation === "portrait"
        ? pageSizeList[layout.pageSize].width
        : pageSizeList[layout.pageSize].height;

    const page = { width: widthOrientation };

    let bodyWidth: number;
    let pageWidth: number;
    let leftMargin: number;
    let rightMargin: number;

    switch (layout.unit) {
      case "px":
        bodyWidth = this.mmToPx(page.width, layout.dpi);
        pageWidth = this.mmToPx(
          page.width - layout.margins.marginLeft - layout.margins.marginRight,
          layout.dpi
        );
        leftMargin = this.mmToPx(layout.margins.marginLeft, layout.dpi);
        rightMargin = this.mmToPx(layout.margins.marginRight, layout.dpi);
        break;
      case "in":
        bodyWidth = this.mmToIn(page.width);
        leftMargin = this.mmToIn(layout.margins.marginLeft);
        rightMargin = this.mmToIn(layout.margins.marginRight);
        pageWidth = bodyWidth - leftMargin - rightMargin;
        break;
      case "cm":
        bodyWidth = page.width / 10;
        leftMargin = layout.margins.marginLeft / 10;
        rightMargin = layout.margins.marginRight / 10;
        pageWidth = bodyWidth - leftMargin - rightMargin;
        break;
      default:
        bodyWidth = page.width;
        pageWidth =
          page.width - layout.margins.marginRight - layout.margins.marginLeft;
        leftMargin = layout.margins.marginLeft;
        rightMargin = layout.margins.marginRight;
        break;
    }

    const css = `body {
    min-width: ${bodyWidth}${layout.unit};
    max-width: ${bodyWidth}${layout.unit};
    padding: 0;
    margin: 0
}
.page {
    min-width: ${pageWidth}${layout.unit};
    max-width: ${pageWidth}${layout.unit};
    margin-left: ${leftMargin}${layout.unit};
    margin-right: ${rightMargin}${layout.unit};
}`;

    return {
      css: css,
      bodyWidth: bodyWidth,
      leftMargin: leftMargin,
      rightMargin: rightMargin,
      pageWidth: pageWidth,
    };
  }

  static MakeBlock(layout: Layout, height: number, elementName: string) {
    const widthOrientation =
      layout.orientation === "portrait"
        ? pageSizeList[layout.pageSize].width
        : pageSizeList[layout.pageSize].height;

    const page = { width: widthOrientation };

    let bodyWidth: number;
    let pageWidth: number;
    // let topMargin: number;
    // let bottomMargin: number;
    let leftMargin: number;
    let rightMargin: number;

    switch (layout.unit) {
      case "px":
        bodyWidth = this.mmToPx(page.width, layout.dpi);
        pageWidth = this.mmToPx(
          page.width - layout.margins.marginLeft - layout.margins.marginRight,
          layout.dpi
        );
        leftMargin = this.mmToPx(layout.margins.marginLeft, layout.dpi);
        rightMargin = this.mmToPx(layout.margins.marginRight, layout.dpi);
        height = this.mmToPx(height, layout.dpi);
        break;
      case "in":
        bodyWidth = this.mmToIn(page.width);
        leftMargin = this.mmToIn(layout.margins.marginLeft);
        rightMargin = this.mmToIn(layout.margins.marginRight);
        pageWidth = bodyWidth - leftMargin - rightMargin;
        height = this.mmToIn(height);
        break;
      case "cm":
        bodyWidth = page.width / 10;
        leftMargin = layout.margins.marginLeft / 10;
        rightMargin = layout.margins.marginRight / 10;
        pageWidth = bodyWidth - leftMargin - rightMargin;
        height = height / 10;
        break;
      default:
        bodyWidth = page.width;
        pageWidth =
          page.width - layout.margins.marginRight - layout.margins.marginLeft;
        leftMargin = layout.margins.marginLeft;
        rightMargin = layout.margins.marginRight;
        break;
    }

    // TODO: Check for margin top

    const css = `body {
    min-width: ${bodyWidth}${layout.unit};
    max-width: ${bodyWidth}${layout.unit};
    min-height: ${height}${layout.unit};
    max-height: ${height}${layout.unit};
    padding: 0;
    margin: 0;
}
${elementName} {
    min-width: ${pageWidth}${layout.unit};
    max-width: ${pageWidth}${layout.unit};
    min-height: ${height}${layout.unit};
    max-height: ${height}${layout.unit};
    margin-left: ${leftMargin}${layout.unit};
    margin-right: ${rightMargin}${layout.unit};
}`;

    return {
      css: css,
      bodyWidth: bodyWidth,
      leftMargin: leftMargin,
      rightMargin: rightMargin,
      pageWidth: pageWidth,
    };
  }

  private static mmToPx(width: number, dpi: Dpi) {
    return Math.round((width * dpi) / 25.4);
  }
  private static mmToIn(width: number) {
    return Math.round((width / 25.4237288) * 100) / 100;
  }
}
