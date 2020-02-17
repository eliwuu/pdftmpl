import { expect } from 'chai';
import { Layout } from '../src/settings';
import Css from "../src/cssBuilder";

describe("css content", function () {
    it("A4 portrait mm 300 dpi margin 5", () => {

        const layout: Layout = {
            pageSize: "A4",
            margins: {
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5
            },
            orientation: "portrait",
            unit: "mm",
            dpi: 300
        }


        const data = Css.MakeContent(layout);
        const result = 
        {
            bodyWidth: data.bodyWidth,
            leftMargin: data.leftMargin,
            rightMargin: data.rightMargin,
            pageWidth: data.pageWidth
        }

        const expected = {
            bodyWidth: 210,
            leftMargin: 5,
            rightMargin: 5,
            pageWidth: 200
        }

        expect(result).to.eql(expected);
    });
    it("A4 landscape mm 300 dpi margin 5", () => {

        const layout: Layout = {
            pageSize: "A4",
            margins: {
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5
            },
            orientation: "landscape",
            unit: "mm",
            dpi: 300
        }

        const data = Css.MakeContent(layout);
        const result = 
        {
            bodyWidth: data.bodyWidth,
            leftMargin: data.leftMargin,
            rightMargin: data.rightMargin,
            pageWidth: data.pageWidth
        }

        const expected = {
            bodyWidth: 297,
            leftMargin: 5,
            rightMargin: 5,
            pageWidth: 287
        }

        expect(result).to.eql(expected);
    });
    it("A4 portrait px 300 dpi margin 5", () => {

        const layout: Layout = {
            pageSize: "A4",
            margins: {
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5
            },
            orientation: "portrait",
            unit: "px",
            dpi: 300
        }


        const data = Css.MakeContent(layout);
        const result = 
        {
            bodyWidth: data.bodyWidth,
            leftMargin: data.leftMargin,
            rightMargin: data.rightMargin,
            pageWidth: data.pageWidth
        }

        const expected = {
            bodyWidth: 2480,
            leftMargin: 59,
            rightMargin: 59,
            pageWidth: 2362
        }

        expect(result).to.eql(expected);
    });
    it("A4 landscape px 300 dpi margin 5", () => {

        const layout: Layout = {
            pageSize: "A4",
            margins: {
                marginBottom: 5,
                marginTop: 5,
                marginLeft: 5,
                marginRight: 5
            },
            orientation: "landscape",
            unit: "px",
            dpi: 300
        }

        const data = Css.MakeContent(layout);
        const result = 
        {
            bodyWidth: data.bodyWidth,
            leftMargin: data.leftMargin,
            rightMargin: data.rightMargin,
            pageWidth: data.pageWidth
        }

        const expected = {
            bodyWidth: 3508,
            leftMargin: 59,
            rightMargin: 59,
            pageWidth: 3390
        }

        expect(result).to.eql(expected);
    });


});