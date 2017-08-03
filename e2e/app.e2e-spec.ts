import { SelectDatePickerPage } from './app.po';

describe('select-date-picker App', () => {
  let page: SelectDatePickerPage;

  beforeEach(() => {
    page = new SelectDatePickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
