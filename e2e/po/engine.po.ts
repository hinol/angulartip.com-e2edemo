import {browser, by, element} from 'protractor';
import {ColorOption, ColorOptionEnum, TypeOption, TypeOptionEnum} from '../../src/app/car/forms/color.form';
import {isNumeric} from 'rxjs/util/isNumeric';

export class EnginePage {
    static navigate() {
        return browser.get('/engine');
    }

    static getValue() {
        return element.all(by.css('h6 p strong'))
            .filter(elem => elem.getText().then(v => isNumeric(v)))
            .first()
            .getText()
            .then(v => parseFloat(v));
    }


    static clickTable(row: number, col: number) {
        element.all(by.css('table tr')).then(rows => {
            rows[row - 1].all(by.css('td')).then(cols => {
                cols[col - 1].click();
            });
        });
    }

}