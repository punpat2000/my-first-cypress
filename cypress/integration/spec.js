/// <reference types="Cypress" />


it('loads examples', () => {
	const url = 'https://example.cypress.io';
	cy.visit(url);
	cy.contains('Kitchen Sink');
});
