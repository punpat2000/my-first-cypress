const ShopNavigation = {
	toggleShopInterface() {
		cy.get('li[data-cy=nav_desktop__shop]', {
			timeout: 50000,
		})
			.should('be.visible')
			.click();
		return this;
	},

	goTo(section) {
		cy.get('a.toc-link').contains(section).should('be.visible').click();
		return this;
	},
};

export { ShopNavigation };