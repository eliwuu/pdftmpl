"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pageSize_1 = require("./pageSize");
class Css {
    static MakeContent(layout) {
        const widthOrientation = layout.orientation === "portrait" ?
            pageSize_1.pageSizeList[layout.pageSize].width : pageSize_1.pageSizeList[layout.pageSize].height;
        const page = { width: widthOrientation };
        let bodyWidth;
        let pageWidth;
        let leftMargin;
        let rightMargin;
        switch (layout.unit) {
            case "px":
                bodyWidth = this.mmToPx(page.width, layout.dpi);
                pageWidth = this.mmToPx(page.width - layout.margins.marginLeft - layout.margins.marginRight, layout.dpi);
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
                pageWidth = page.width - layout.margins.marginRight - layout.margins.marginLeft;
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
            pageWidth: pageWidth
        };
    }
    static MakeBlock(layout, height, elementName) {
        const widthOrientation = layout.orientation === "portrait" ?
            pageSize_1.pageSizeList[layout.pageSize].width : pageSize_1.pageSizeList[layout.pageSize].height;
        const page = { width: widthOrientation };
        let bodyWidth;
        let pageWidth;
        // let topMargin: number;
        // let bottomMargin: number;
        let leftMargin;
        let rightMargin;
        switch (layout.unit) {
            case "px":
                bodyWidth = this.mmToPx(page.width, layout.dpi);
                pageWidth = this.mmToPx(page.width - layout.margins.marginLeft - layout.margins.marginRight, layout.dpi);
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
                pageWidth = page.width - layout.margins.marginRight - layout.margins.marginLeft;
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
            pageWidth: pageWidth
        };
    }
    static mmToPx(width, dpi) {
        return Math.round((width * dpi) / 25.4);
    }
    static mmToIn(width) {
        return (Math.round((width / 25.4237288) * 100) / 100);
    }
}
exports.default = Css;
