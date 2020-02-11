import { expect } from 'chai';
import { Page } from '../src/settings';
import Menu from '../src/menu';


const a4portrait =
{
    origin: 'Mac',
    target: 'Mac',
    constraint: 'Fixed',
    unit: 'px',
    page: 'A4',
    orientation: 'portrait'
}
const a4landscape =
{
    origin: 'Mac',
    target: 'Mac',
    constraint: 'Fixed',
    unit: 'px',
    page: 'A4',
    orientation: 'landscape'
}

describe('page size', function() {

    it('a4 portrait', async () => {
        let result = await Menu.getPage(a4portrait);

        let expected: Page = {name: "A4", width: 210, height: 297, orientation: "portrait"};

        expect(result).to.eql(expected);
    });

    it('a4 landscape', async () => {
        let result = await Menu.getPage(a4landscape);

        let expected: Page = {name: "A4", width: 297, height: 210, orientation: "landscape"};

        expect(result).to.eql(expected);
    });
})