import { browser, element, by } from 'protractor';

export class Ang2materializePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
