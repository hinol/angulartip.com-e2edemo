import {browser, by, element} from 'protractor';
import {ColorOption, ColorOptionEnum, TypeOption, TypeOptionEnum} from '../../src/app/car/forms/color.form';

export class ColorPage {
    static navigate() {
        return browser.get('/color');
    }

    static getCountConfigurations() {
        return element(by.css('h3 span')).getText().then(v => {
            return parseFloat(v.toString().trim().split(':')[1])
        });
    }

    static selectColor(color: ColorOptionEnum) {
        element(by.name('color')).click()
        const colorLabel = ColorOption.filter(c => c.value === color)[0].label;

        return element(by.cssContainingText('.mat-option', colorLabel)).click();
    }

    static selectType(type: TypeOptionEnum) {
        element(by.name('type')).click()
        const typeLabel = TypeOption.filter(t => t.value === type)[0].label;

        return element(by.cssContainingText('.mat-option', typeLabel)).click();
    }

    static submit() {
        element(by.css('form button[type=submit]')).click();
    }

    static resetForm() {
        element(by.css('form button[type=reset]')).click();
    }

    static getDangerLength() {
        return element.all(by.tagName('mat-error')).count();
    }
}