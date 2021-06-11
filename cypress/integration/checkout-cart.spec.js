/// <reference types="Cypress" />

describe('Checkout Cart', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Checks out cart', () => {
		cy.get('[data-cy=auth__login__menu]').click();
		cy.get('input[name=email]').type('saint12302@gmail.com');
		cy.get('input[name=password]').type('Pomelo123');
		cy.get('[data-cy=auth__login__email__button]').click();
		cy.get('li[data-cy=nav_desktop__shop]', {
			timeout: 100000,
		}).should('be.visible').click();
	});
	// it('visits Pomelo website', () => {
	// 	cy.visit('/');
	// });

	// it('clicks login button', () => {
	// 	cy.get('[data-cy=auth__login__menu]').click();
	// });

	// it('enters e-mail and password', () => {
	// 	cy.get('input[name=email]').type('saint12302@gmail.com');
	// 	cy.get('input[name=password]').type('Pomelo123');
	// });

	// it('clicks submit login button', () => {
	// 	cy.get('[data-cy=auth__login__email__button]').click();
	// });

	// it('navigates to all clothing section', () => {
	// 	cy.waitUntil(() =>
	// 		cy.getCookie('token').then((cookie) => !!(cookie && cookie.value))
	// 	);
	// 	// cy.wait(10000);
	// 	cy.get('li[data-cy=nav_desktop__shop]', {
	// 		timeout: 10000,
	// 	}).click();
	// });
});
