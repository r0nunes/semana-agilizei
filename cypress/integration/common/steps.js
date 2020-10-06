Given(/^que acessa o site$/, () => {

    cy.server();
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**' )
    .as('postNewTable');

    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**' )
    .as('postNewUserTable');

    cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**' )
    .as('getNewTable');

    cy.visit('Register.html');
});
