const Auth = {
	toggleLogginInterface() {
		cy.get('[data-cy=auth__login__menu]').click();
		return this;
	},

	logginByEmail() {
		cy.get('input[name=email]').type('saint12302@gmail.com');
		cy.get('input[name=password]').type('Pomelo123');
		cy.get('[data-cy=auth__login__email__button]').click();
		return this;
	},
};

export { Auth };