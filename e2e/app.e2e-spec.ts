import { MaterialTestPage } from './app.po';

describe('material-test App', () => {
  let page: MaterialTestPage;

  beforeEach(() => {
    page = new MaterialTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
