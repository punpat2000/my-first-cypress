/// <reference types="Cypress" />

describe('Checkout Cart', () => {
	beforeEach(() => {
		cy.log('visit Pomelo Thailand landing page');
		cy.visit('/');
		// cy.visit('https://www.pomelofashion.com/th/en/clothes/clothes?sort=new_in');
	});

	it('Checks out cart', () => {
		cy.get('[data-cy=auth__login__menu]').click();
		cy.get('input[name=email]').type('saint12302@gmail.com');
		cy.get('input[name=password]').type('Pomelo123');
		cy.get('[data-cy=auth__login__email__button]').click();
		cy.get('li[data-cy=nav_desktop__shop]', {
			timeout: 100000,
		})
			.should('be.visible')
			.click();
		cy.get('a.toc-link').contains('All Clothing').should('be.visible').click();
		cy.wait(10000);
		cy.get(
			'.jsx-1128491485 > :nth-child(1) > .jsx-3659697076 > .product__link > .product-image__fig > .product-image__hover > .picture > img',
			{ timeout: 10000 }
		).click();
		cy.get('button.pdp__add-to-bag-cta', { timeout: 10000 })
			.should('be.visible')
			.click();
		cy.get('button[data-cy="cart__view_bag"]', { timeout: 10000 })
			.should('be.visible')
			.click();
		cy.get('.cart-body', { timeout: 10000 }).should('be.visible');
		cy.get('button[data-cy=cart__checkout]', { timeout: 10000 }).click();
	});

	// cy.get('div.product-list > div.product-item > .product-item.hoverable', { timeout: 10000 })
	// 	.should('be.visible');
	// .find('a.product__link > .product-image__fig');
	// .find(
	// 	'a.product__link > .product-image__fig > .product-image__hover > picture.picture > img.image',
	// 	{ timeout: 10000 }
	// ).click();
	// .should('be.visible')
	// .click();

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
