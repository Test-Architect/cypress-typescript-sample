import 'cypress-mochawesome-reporter/register';
import LoginPage from 'cypress/page-objects/login-page';
import CartPage from 'cypress/page-objects/cart-page';
import CheckoutPage from 'cypress/page-objects/checkout-page';
import InventoryPage from 'cypress/page-objects/inventory-page';

describe('Sauce Labs Demo - Purchase Flow', () => {
  before(() => {
    cy.visit('/');
    //cy.get('.login-form').should('be.visible');
    cy.viewport(Cypress.env('viewport'));
  });

  it('should complete the purchase flow successfully', function () {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const testName = this.test.title;
    cy.logAndReport(`Starting Test case ${testName}`);

    // Verify Website loaded
    cy.logAndReport('Verify Sauce Labs Demo website title');
    loginPage.verifyPageTitleDisplayedCorrectly('Swag Labs');

    // Login in to website
    cy.logAndReport('Logging in with username and password');
    loginPage.login(Cypress.env('username'), Cypress.env('password'));

    // From inventory page add 3 random items to the cart
    cy.logAndReport('Add 3 random items to the cart');
    const selectedPricesPromise = inventoryPage.addThreeRandomItemsToCart1();
    // Using the selectedPricesPromise
    selectedPricesPromise.then(function (selectedPrices: any): void {
      const totalPriceOfAddedItems = selectedPrices.reduce(
        (sum, price) => sum + price,
        0,
      );
      cy.logAndReport(`Total price: ${totalPriceOfAddedItems.toFixed(2)}`);

      // Go to cart and verify items
      cy.logAndReport(
        'Navigate to the shopping cart and Verify number of items in cart',
      );
      cartPage.clickShoppingCartLink();
      cartPage.verifyCartItemsCount(3);

      // Proceed to checkout
      cy.logAndReport('Proceeding to checkout, fill checkout information');
      checkoutPage.proceedToCheckout();
      checkoutPage.fillCheckoutInformation('Sakharam', 'Thorat', '411015');

      //Verify checkout totals
      checkoutPage.verifyCheckoutTotals(totalPriceOfAddedItems);

      // Finish the checkout
      cy.log('Finish the checkout and Verify the complete message');
      checkoutPage.finishCheckout();
      checkoutPage.verifyCompleteMessage();
    });
  });
});
