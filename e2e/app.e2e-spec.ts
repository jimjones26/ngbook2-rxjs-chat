import { Ngbook2RxjsChatPage } from './app.po';

describe('ngbook2-rxjs-chat App', () => {
  let page: Ngbook2RxjsChatPage;

  beforeEach(() => {
    page = new Ngbook2RxjsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
