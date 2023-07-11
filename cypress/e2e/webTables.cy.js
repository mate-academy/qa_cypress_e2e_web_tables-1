/// <reference types="cypress" />
const { generateUser } = require('../support/generate');

describe('Web Tables page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

    const userName = 'test'
    const checkEmail = ['cierra@example.com', 'alden@example.com', 'kierra@example.com']
    const {
        
      firstName,
      lastName,
      email,
      age,
      salary,
      department
      
    } = generateUser();

  it('should provide an ability to pagination, rows count selection', () => {
   
    cy.get('.-pageJump > input')
     .should('have.value', '1');
    
    cy.get('[aria-label="rows per page"]')
      .select('5 rows');
    cy.get('[value="5"]')
      .should('have.value', '5');
    cy.get('select')
      .should('have.value', '5');
    
    cy.get('[aria-label="rows per page"]')
      .select('10 rows');
    cy.get('[value="10"]')
      .should('have.value', '10');
    cy.get('select')
      .should('have.value', '10');
    
    cy.get('[aria-label="rows per page"]')
      .select('20 rows');
    cy.get('[value="20"]')
      .should('have.value', '20');
    cy.get('select')
      .should('have.value', '20');
    
    cy.get('[aria-label="rows per page"]')
      .select('25 rows');
    cy.get('[value="25"]')
      .should('have.value', '25');
    cy.get('select')
      .should('have.value', '25');
    
    cy.get('[aria-label="rows per page"]')
      .select('50 rows');
    cy.get('[value="50"]')
      .should('have.value', '50');
    cy.get('select')
      .should('have.value', '50');
    
    cy.get('[aria-label="rows per page"]')
      .select('100 rows');
    cy.get('[value="100"]')
      .should('have.value', '100');
    cy.get('select')
      .should('have.value', '100');
  });

  it('should provide an ability to add new worker', () => {
   
    cy.contains('.btn', 'Add')
      .click();
    cy.get('[id="firstName"]')
      .type(userName)
    cy.get('[id="lastName"]')
      .type(lastName)
    cy.get('[id="userEmail"]')
      .type(email)
    cy.get('[id="age"]')
      .type(age)
    cy.get('[id="salary"]')
      .type(salary)
    cy.get('[id="department"]')
      .type(department)
    cy.contains('.btn', 'Submit')
      .click();
 
  // 'should provide an ability to find worker in search field and edit it'
     
    cy.get('#searchBox')
     .click();
    cy.get('#searchBox')
      .type(userName);
    cy.get('#searchBox')
      .clear();
    cy.get('#searchBox')
      .click();
    cy.get('#searchBox')
      .type(email);
    cy.get('#searchBox')
      .clear();
    cy.get('#searchBox')
      .click();
    cy.get('#searchBox')
      .type(lastName);
    cy.get('#searchBox')
      .clear();
    cy.get('#searchBox')
      .click();
    cy.get('#searchBox')
      .type(age);
    cy.get('#searchBox')
      .clear();
    cy.get('#searchBox')
      .click();
    cy.get('#searchBox')
      .type(salary);
    cy.get('#searchBox')
      .clear();
    cy.get('#searchBox')
      .click();
    cy.get('#searchBox')
      .type(department);
    cy.get('#searchBox')
      .clear();
    cy.get('#edit-record-4 > svg')
      .click();
    cy.get('[id="firstName"]')
      .type(firstName)
    cy.get('#age')
      .clear()
      .type('24');
    cy.contains('.btn', 'Submit')
      .click();
    
  //'should provide an ability to validate data in worker row after creating worker'
    cy.get('.rt-table')
      .should('contain', userName);
    cy.get('.rt-table')
      .should('contain', lastName);
    cy.get('.rt-table')
      .should('contain', email);
    cy.get('.rt-table')
      .should('contain', salary);
    cy.get('.rt-table')
      .should('contain', department);
    cy.get('.rt-table')
      .should('contain', '24');

   //'should provide an ability to delete all worker'
    cy.get('#delete-record-4 > svg')
      .click();
    cy.contains('.rt-td', email)
      .should('not.exist');
    cy.get('#delete-record-3 > svg > path')
      .click();
    cy.get('#delete-record-2 > svg > path')
      .click();
    cy.get('#delete-record-1 > svg > path')
      .click();
    cy.contains('.rt-td', checkEmail)
      .should('not.exist');
   
  });

  });
  