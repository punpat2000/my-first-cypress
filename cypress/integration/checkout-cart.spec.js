/// <reference types="Cypress" />
import { Auth, ShopNavigation, Shopping } from '../support/utils';

describe('Checkout cart', () => {
	beforeEach(() => {
		cy.log('visit Pomelo Thailand landing page');
		cy.visit('/');
	});

	afterEach(() => {
		cy.clearCookies();
		cy.clearLocalStorage();
	});

	it('Checks out cart while signed in', () => {
		Auth.toggleLogginInterface().logginByEmail();
		ShopNavigation.toggleShopInterface().goTo('All Clothing');
		cy.wait(15000);
		Shopping.pickFirstItem().addToBag().checkOut();
	});

	// it('Checks out cart while unsigned', () => {
	// 	ShopNavigation.toggleShopInterface().goTo('All Clothing');
	// 	cy.wait(15000);
	// 	Shopping.pickFirstItem().addToBag().checkOut();
	// });
});
