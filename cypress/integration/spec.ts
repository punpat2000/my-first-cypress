it('loads examples', () => {
	const url: string = 'https://example.cypress.io';
	cy.visit(url);
	cy.contains('Kitchen Sink');
});
