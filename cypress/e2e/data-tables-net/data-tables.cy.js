describe('Data Tables', () => {
    beforeEach(() => {
        cy.visit('https://datatables.net/')
    });

    it('TC003 - Pagination: Navigate dynamically to the next available page', () => {
        cy.get('.dt-paging a').then(paginationButtons => {
          const pages = paginationButtons.length; // Count available pages
      
          if (pages > 1) {
            // Find the next page number dynamically
            cy.get('.dt-paging .current').then(activePage => {
              const currentPage = Number(activePage.text().trim());
              const nextPage = currentPage + 1; // Calculate next page
      
              cy.get(`[data-dt-idx="${nextPage - 1}"]`).contains(nextPage.toString()).click();
              cy.get('.hero-callout').should('exist'); // Verify content loads
            });
          } else {
            cy.log('Pagination is not available or only one page exists.');
          }
        });
      });
      
    it('Verify if tables show 10 entries by default', () => {
        cy.get('#example tbody tr').should('have.length', 10)
        cy.get('#example_info').should('contain', 'Showing 1 to 10 of 57 entries')
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
      

        // cy.get('.dt-input li').contains('10')
    });
    it('Verify search function', () => {
        const searchQuery = "Airi Satou"
        cy.get('#dt-search-0').type(searchQuery)
        cy.get('.dtr-control').should('contain', 'Airi Satou')
      

        // cy.get('.dt-input li').contains('10')
    });
    // it('Verify ascending order by clicking "Name"', () => {
    //     cy.get('#example tbody tr')
    //       .then(rows => {
    //         const originalNames = rows.map((index, row) => 
    //           Cypress.$(row).find('td').first().text()).get();
      
    //         // Click the "Name" header to trigger sorting
    //         cy.get('th').contains('Name').click();
      
    //         // Ensure table updates before asserting sorting
    //         cy.get('#example tbody tr')
    //           .should('be.visible') // Ensures table has refreshed
    //           .then(sortedRows => {
    //             const sortedNames = sortedRows.map((index, row) => 
    //               Cypress.$(row).find('td').first().text()).get();
      
    //             // Sort original names for comparison
    //             const expectedSortedNames = [...originalNames].sort((a, b) => a.localeCompare(b));
      
    //             // Use `cy.wrap()` for Cypress to handle the assertion properly
    //             cy.wrap(sortedNames).should('deep.equal', expectedSortedNames);
    //           });
    //       });
    //   });
});
