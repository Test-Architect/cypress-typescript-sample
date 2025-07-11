import _ from 'cypress/types/lodash';
import BasePage from './base-page';

class InventoryPage extends BasePage {
  private inventoryItems = '.inventory_item';
  private inventoryItemPriceSelector = '.inventory_item_price';
  private threeRandomIndices = [];

  // Method to add three random items to the cart
  public addThreeRandomItemsToCart() {
    cy.get(this.inventoryItems).then((items) => {
      const itemCount = items.length;
      const selectedIndices = new Set<number>();

      // Select 3 random items
      while (selectedIndices.size < 3) {
        const randomIndex = Math.floor(Math.random() * itemCount);
        selectedIndices.add(randomIndex);
      }

      // Click on Add to Cart button for selected items
      selectedIndices.forEach((index) => {
        const item = items[index];
        cy.wrap(item).find('button').click();
        cy.logAndReport(`==> Added item ${index + 1} to cart`);
      });
    });
  }
  // Method to add three random items to the cart
  public addThreeRandomItemsToCart1(): Cypress.Chainable<number[]> {
    const selectedPrices: number[] = [];

    // Get all inventory items
    cy.get(this.inventoryItems).then((items) => {
      const itemCount = items.length;
      cy.logAndReport(`Total items found: ${itemCount}`);

      // Select 3 random items
      const selectedIndices = new Set<number>();
      while (selectedIndices.size < 3) {
        const randomIndex = Math.floor(Math.random() * itemCount);
        selectedIndices.add(randomIndex);
      }

      // Add items to cart and get their prices
      selectedIndices.forEach((index) => {
        const item = items[index];
        cy.wrap(item).find('button').click(); // Click add to cart button

        // Get and parse item price
        cy.wrap(item)
          .find('.inventory_item_price')
          .invoke('text')
          .then((priceText) => {
            const price = parseFloat(priceText.replace('$', ''));
            selectedPrices.push(price); // Add price to selectedPrices array
            cy.logAndReport(
              `==> Added item ${index + 1} to cart with price $${price}`,
            );
          });
      });
    });

    // Return selectedPrices after all items have been added and prices fetched
    return cy.wrap(selectedPrices);
  }
}

export default InventoryPage;
