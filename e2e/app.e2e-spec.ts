import { Ng2demoPage } from './app.po';

describe('ng2demo App', () => {
  let page: Ng2demoPage;

  beforeEach(() => {
    page = new Ng2demoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
