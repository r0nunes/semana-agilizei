/// <reference types="cypress" />


let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        // rotas
        // POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        // POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        // GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X

        cy.server();
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**' )
        .as('postNewTable');

        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**' )
        .as('postNewUserTable');

        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**' )
        .as('getNewTable');


       // baseUrl + Register.html
        cy.visit('Register.html');

        // type
        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false }));

        // check -> radio's e checkboxes
        cy.get('input[value=FeMale]').check();
        cy.get('input[type=checkbox]').check('Cricket');
        cy.get('input[type=checkbox]').check('Hockey');

        // select -> select & select 2 (combo)
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('Australia', { force: true });
        cy.get('select#yearbox').select('1996');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('24');
        cy.get('input#firstpassword').type('Agilizei@2020');
        cy.get('input#secondpassword').type('Agilizei@2020');
        
        // attachFile -> input file
        cy.get('input#imagesrc').attachFile('black-image.png')

        cy.get('button#submitbtn').click();


        cy.wait('@postNewTable').then((resNewTable) => { 
           //chai
           expect(resNewTable.status).to.eq(200)
        })

        cy.wait('@postNewUserTable').then((resNewUserTable) => { 
            //chai
            expect(resNewUserTable.status).to.eq(200)
         })

         cy.wait('@getNewTable').then((resNewTable) => { 
            //chai
            expect(resNewTable.status).to.eq(200)
         })

         cy.url().should('contain', 'WebTable');
    });
});

// elementos




