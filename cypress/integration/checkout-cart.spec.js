/// <reference types="Cypress" />
import { Auth, ShopNavigation, Shopping } from '../support/utils';

describe('Checkout Cart', () => {
	beforeEach(() => {
		cy.log('visit Pomelo Thailand landing page');
		cy.visit('/');
	});

	it('Checks out cart', () => {
		Auth.toggleLogginInterface().logginByEmail();
		ShopNavigation.toggleShopInterface().goTo('All Clothing');
		cy.wait(10000);
		Shopping.pickFirstItem().addToBag().checkOut();
	});
});
