import { ComponentsTestPage } from './app.po';

describe('components-test App', () => {
  let page: ComponentsTestPage;

  beforeEach(() => {
    page = new ComponentsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
