import {ColorPage} from '../../po/color.po';
import {ColorOptionEnum, TypeOptionEnum} from '../../../src/app/car/forms/color.form';
import {EnginePage} from '../../po/engine.po';

describe('Engine Page', () => {

    beforeEach(() => {
        EnginePage.navigate();
    });

    it('click table', () => {
        EnginePage.clickTable(2, 2);
        expect(EnginePage.getValue()).toEqual(2);
    });
});
