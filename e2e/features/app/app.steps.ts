import {after, before, binding, given, then, when} from 'cucumber-tsflow';

import {ColorPage} from '../../po/color.po';
import {browser} from 'protractor/built';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

const expect = chai.use(chaiAsPromised).expect;

@binding()
export class AppSteps {
    private page: ColorPage;

    constructor() {
    }

    @before('detailsView')
    setupForm() {
        this.page = new ColorPage();
    }

    @given(/^I go to color page$/)
    async goToPage() {
        await ColorPage.navigate();
    }

    @when(/Run step color/)
    async clickElement() {
        await ColorPage.navigate();
    }

    @then(/^Should has some configurations$/)
    async shouldHasSomeConfigurations() {

        expect(await ColorPage.getCountConfigurations()).to.be.above(0);
    }
}
