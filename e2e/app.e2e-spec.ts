import { HotofferPage } from './app.po';

describe('hotoffer App', function() {
  let page: HotofferPage;

  beforeEach(() => {
    page = new HotofferPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
