import {ColorPage} from '../../po/color.po';
import {ColorOptionEnum, TypeOptionEnum} from '../../../src/app/car/forms/color.form';

describe('e2edemo App', () => {

    beforeEach(() => {
        ColorPage.navigate();
        ColorPage.resetForm();
    });

    it('configuration more than 0', () => {
        expect(ColorPage.getCountConfigurations()).toBeGreaterThan(0);
    });
    it('no pink cars', () => {
        ColorPage.selectColor(ColorOptionEnum.PINK);
        ColorPage.selectType(TypeOptionEnum.TRUCK);
        ColorPage.submit();
        expect(ColorPage.getCountConfigurations()).toEqual(0);
    });
    it('check validation', () => {
        ColorPage.submit();
        expect(ColorPage.getDangerLength()).toEqual(2);
        ColorPage.selectColor(ColorOptionEnum.PINK);
        expect(ColorPage.getDangerLength()).toEqual(1);
        ColorPage.selectType(TypeOptionEnum.TRUCK);
        expect(ColorPage.getDangerLength()).toEqual(0);
    });
});
