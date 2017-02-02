import { Ang2materializePage } from './app.po';

describe('ang2materialize App', function() {
  let page: Ang2materializePage;

  beforeEach(() => {
    page = new Ang2materializePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
