import BasePage from './base-page';

class CheckoutPage extends BasePage {
  private checkoutButton = '#checkout';
  private firstNameInput = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';
  private completeHeader = '.complete-header';
  private subtotalLabel = '.summary_subtotal_label';
  private taxLabel = '.summary_tax_label';
  private totalLabel = '.summary_total_label';

  // Method to proceed to checkout
  public proceedToCheckout() {
    this.click(this.checkoutButton);
    cy.logAndReport(`==> Sucessfully proceeded to checkout`);
  }

  // Method to fill out checkout information
  public fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    this.type(this.firstNameInput, firstName);
    this.type(this.lastNameInput, lastName);
    this.type(this.postalCodeInput, postalCode);
    cy.logAndReport(
      `==> Filled checkout information for ${firstName} ${lastName}, Postal Code: ${postalCode}`,
    );
    this.click(this.continueButton);
  }

  public verifyCheckoutTotals(totalPrice: number) {
    cy.get(this.subtotalLabel)
      .invoke('text')
      .then((subtotalText) => {
        const subtotal = parseFloat(subtotalText.replace('Item total: $', ''));
        cy.logAndReport(`Subtotal: ${subtotal.toFixed(2)}`);
        expect(subtotal.toFixed(2)).to.equal(totalPrice.toFixed(2));

        cy.get(this.taxLabel)
          .invoke('text')
          .then((taxText) => {
            const tax = parseFloat(taxText.replace('Tax: $', ''));
            cy.logAndReport(`Tax: ${tax.toFixed(2)}`);

            cy.get(this.totalLabel)
              .invoke('text')
              .then((totalText) => {
                const total = parseFloat(totalText.replace('Total: $', ''));
                cy.logAndReport(`Total: ${total.toFixed(2)}`);
                const expectedTotal = (subtotal + tax).toFixed(2);

                expect(total.toFixed(2)).to.equal(expectedTotal);
                cy.logAndReport(`Expected total: ${expectedTotal}`);
              });
          });
      });
  }

  public finishCheckout() {
    this.click(this.finishButton);
    cy.logAndReport(`==> Finishing the checkout`);
  }

  // Method to verify the complete message
  public verifyCompleteMessage() {
    cy.get(this.completeHeader).should(
      'contain.text',
      'Thank you for your order!',
    );
    cy.logAndReport(`==> Successfully verified the complete message`);
  }
}

export default CheckoutPage;
