import { SelectablePage } from "../pageObjects/SelectablePage";


describe('demoqa MD1', () => {

  context("Selectable", () => {

    beforeEach(() => {
      SelectablePage.visit();
    });

    it('Scenario 1', () => {
      // Click “Grid”
      SelectablePage.GridTabButton.click();

      // Click - “Two”, “Four”, “Six”, “Eight"
      SelectablePage.GridButtonTwo.click();
      SelectablePage.GridButtonFour.click();
      SelectablePage.GridButtonSix.click();
      SelectablePage.GridButtonEight.click();

      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.GridButtonTwo.should(
        "have.class",
        "active"
      );
      SelectablePage.GridButtonFour.should(
        "have.class",
        "active"
      );
      SelectablePage.GridButtonSix.should(
        "have.class",
        "active"
      );
      SelectablePage.GridButtonEight.should(
        "have.class",
        "active"
      );

      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.GridButtonOne.should(
        "not.have.class",
        "active"
      );
      SelectablePage.GridButtonThree.should(
        "not.have.class",
        "active"
      );
      SelectablePage.GridButtonFive.should(
        "not.have.class",
        "active"
      );
      SelectablePage.GridButtonSeven.should(
        "not.have.class",
        "active"
      );
      SelectablePage.GridButtonNine.should(
        "not.have.class",
        "active"
      );
    })

  });

})