const Shopping = {
	pickFirstItem() {
		cy.get(
			'.jsx-1128491485 > :nth-child(1) > .jsx-3659697076 > .product__link > .product-image__fig > .product-image__hover > .picture > img',
			{ timeout: 10000 }
		).click();
		return this;
	},

	addToBag() {
		cy.get('button.pdp__add-to-bag-cta', { timeout: 10000 })
			.should('be.visible')
			.click();
		return this;
	},

	viewBag() {
		cy.get('button[data-cy="cart__view_bag"]', { timeout: 10000 })
			.should('be.visible')
			.click();
		return this;
	},

	checkOut() {
		this.viewBag();
		cy.get('.cart-body', { timeout: 10000 }).should('be.visible');
		cy.get('button[data-cy=cart__checkout]', { timeout: 10000 }).click();
	},
};

export { Shopping };
