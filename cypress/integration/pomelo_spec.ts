describe('Checkout Cart', () => {
	it('visits Pomelo website', () => {
		cy.visit('/');
	});

	it('clicks login button', () => {
		cy.get('button').contains('Login').click();
	});

	it('enters e-mail and password', () => {
		cy.get('[type="email"][name="email"]').type('saint12302@gmail.com');
		cy.get('[type="password"][name="password"]').type('Pomelo123');
	});

	it('clicks submit login button', () => {
		cy.get('button').contains('Log In').click();
	})
});
