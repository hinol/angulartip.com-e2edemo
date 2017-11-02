
import {ColorPage} from '../po/colorPage.po';

describe('e2edemo App', () => {

  beforeEach(() => {
    ColorPage.navigate();
  });

  it('should display welcome message', () => {

    expect(ColorPage.getCountConfigurations()).toEqual(50);
  });
});
