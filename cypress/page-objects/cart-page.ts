import BasePage from './base-page';

class CartPage extends BasePage {
  private shoppingCartLink = '.shopping_cart_link';
  private cartItems = '.cart_item';

  // Method to click on shopping cart link
  public clickShoppingCartLink() {
    this.click(this.shoppingCartLink);
  }

  // Method to verify cart items count
  public verifyCartItemsCount(expectedCount: number) {
    cy.get(this.cartItems).should('have.length', expectedCount);
    cy.logAndReport(
      `==> Successfully verified there are ${expectedCount} items in the cart`,
    );
  }
}

export default CartPage;
