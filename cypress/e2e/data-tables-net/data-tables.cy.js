describe('Data Tables', () => {
    beforeEach(() => {
        cy.visit('/')
    });

      
    it('Verify if tables show 10 entries by default', () => {
        cy.get('#example tbody tr').should('have.length', 10)
        cy.get('#example_info').should('contain', 'Showing 1 to 10 of 57 entries')
    });
    it('Verify navigating to page 2 and verify content', () => {
        cy.get('[data-dt-idx="1"]').contains('2').click();
        cy.get('.hero-callout').should('exist');
      });
      it('Verify navigating to page 3 and verify content', () => {
        cy.get('[data-dt-idx="2"]').contains('3').click();
        cy.get('.hero-callout').should('exist');
      });
      it('Verify navigating to page 4 and verify content', () => {
        cy.get('[data-dt-idx="3"]').contains('4').click();
        cy.get('.hero-callout').should('exist');
      });
      it('Verify navigating to page 5 and verify content', () => {
        cy.get('[data-dt-idx="4"]').contains('5').click();
        cy.get('.hero-callout').should('exist');
      });
      it('Verify navigating to page 6 and verify content', () => {
        cy.get('[data-dt-idx="5"]').contains('6').click();
        cy.get('.hero-callout').should('exist');
      });
    describe('Verify different table entry selections', () => {
    
        it('Verify tables show 25 entries by choosing 25 in dropdown list', () => {
          cy.get('.dt-input').should('be.visible').first().select('25');
          cy.get('#example tbody tr').should('have.length', 25);
          cy.get('#example_info').should('contain', 'Showing 1 to 25 of 57 entries');
        });
    
        it('Verify tables show 50 entries by choosing 50 in dropdown list', () => {
          cy.get('.dt-input').first().select('50');
          cy.get('#example tbody tr').should('have.length', 50);
          cy.get('#example_info').should('contain', 'Showing 1 to 50 of 57 entries');
        });
    
        it('Verify tables show 100 entries by choosing 100 in dropdown list', () => {
          cy.get('.dt-input').first().select('100');
          cy.get('select').select('100').invoke('val').then((val) => {
            expect(Number(val)).to.be.gte(51);
          });
        });
    });
    it('Verify descending, random, ascending order by clicking "Name"', () => {
        cy.get('.dt-column-title').first().click()
        cy.get(':nth-child(1) > .sorting_1').should('contain', 'Zorita Serrano')
        cy.get('.dt-column-title').first().click()
        cy.get(':nth-child(1) > .dtr-control').should('contain', 'Tiger Nixon')
        cy.get('.dt-column-title').first().click()
        cy.get(':nth-child(1) > .dtr-control').should('contain', 'Airi Satou')
    });
    it('Verify if Position is sorting from ascending by clicking it', () => {
        cy.contains('th', 'Position').click();
        cy.get('td:nth-child(2)').then(($position) => {
          const positionValues = $position.map((index, position) => parseInt(position.innerText)).get();
          const sortedPosition = [...positionValues].sort((a, b) => a - b);
          expect(positionValues).to.deep.equal(sortedPosition);
        });
      });
      it('Verify if Office is sorting from ascending by clicking it', () => {
        cy.contains('th', 'Office').click();
        cy.get('td:nth-child(3)').then(($office) => {
          const officeValues = $office.map((index, office) => parseInt(office.innerText)).get();
          const officePosition = [...officeValues].sort((a, b) => a - b);
          expect(officeValues).to.deep.equal(officePosition);
        });
      });

        it('Verify if Age is sorting from ascending by clicking it', () => {
          cy.contains('th', 'Age').click();
          cy.get('td:nth-child(4)').then(($ages) => {
            const ageValues = $ages.map((index, age) => parseInt(age.innerText)).get();
            const sortedAges = [...ageValues].sort((a, b) => a - b);
            expect(ageValues).to.deep.equal(sortedAges);
          });
        });

          it('Verify if Salary is sorting from ascending by clicking it', () => {
            cy.contains('th', 'Salary').click({ force: true });
            cy.get('td:nth-child(6)').then(($salary) => {
              const salaryValues = $salary.map((index, salary) => parseInt(salary.innerText)).get();
              const sortedSalary = [...salaryValues].sort((a, b) => a - b);
              expect(salaryValues).to.deep.equal(sortedSalary);
            });
          });
 
      
    it('Verify search function', () => {
        const searchQuery = "Airi Satou"
        cy.get('#dt-search-0').type(searchQuery)
        cy.get('.dtr-control').should('contain', 'Airi Satou')
    });
    it('Verify searching a non existent name', () => {
        cy.get('#dt-search-0').type('sample name')
        cy.get('.dt-empty').should('be.visible').and('contain', 'No matching records found')
    });
});
    

