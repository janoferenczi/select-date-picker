import { browser, by, element } from 'protractor';

export class SelectDatePickerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('select-date-picker h1')).getText();
  }
}
