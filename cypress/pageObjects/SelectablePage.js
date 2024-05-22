import { BasePage } from "../pageObjects/BasePage";

export class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get GridTabButton() {
    return cy.get("#demo-tab-grid");
  }

  static get GridButtonOne() {
    return cy.get(".list-group-item").contains("One");
  }

  static get GridButtonTwo() {
    return cy.get(".list-group-item").contains("Two");
  }

  static get GridButtonThree() {
    return cy.get(".list-group-item").contains("Three");
  }

  // ====

  static get GridButtonFour() {
    return cy.get(".list-group-item").contains("Four");
  }

  static get GridButtonFive() {
    return cy.get(".list-group-item").contains("Five");
  }

  static get GridButtonSix() {
    return cy.get(".list-group-item").contains("Six");
  }

  // ====

  static get GridButtonSeven() {
    return cy.get(".list-group-item").contains("Seven");
  }

  static get GridButtonEight() {
    return cy.get(".list-group-item").contains("Eight");
  }

  static get GridButtonNine() {
    return cy.get(".list-group-item").contains("Nine");
  }

}
