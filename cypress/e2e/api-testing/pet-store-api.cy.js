// import 'cypress-plugin-api';
// import 'cypress-wait-until';

import { generateUser } from '../../support/faker_api';
// import { faker } from '@faker-js/faker';
let petID;

describe('Petstore, Store Endpoint', () => {
    it('GET - Returns pet inventories by status', () => {
        cy.api({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/inventory'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('sold');
            expect(response.body.sold).to.be.a('number');
            expect(response.body.sold).to.be.within(1, 100); // Example range
        });
    });
    it('POST - Place an order for a pet', () => {
        cy.api({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/store/order',
            body: {
                "id": 5,
                "petId": 0,
                "quantity": 0,
                "shipDate": "2025-04-22T03:29:46.979Z",
                "status": "placed",
                "complete": true
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body.id).to.be.a('number');
            petID = response.body.id
            // expect(response.body.sold).to.be.within(1, 100); // Example range

        });
    });
    it('GET - Attempt to find an invalid order (404 error)', () => {
        cy.api({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/order/sdsd', // ✅ Using a non-existent ID
            failOnStatusCode: false // ✅ Prevents Cypress from failing the test immediately
        }).then((response) => {
            expect(response.status).to.eq(404); // ✅ Expecting 404 Not Found

        });
    });

    it('GET - Find purchase order by ID', () => {
        // cy.wrap(petID)
        // cy.waitUntil(() =>
        cy.api({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/store/order/' + petID
        }).should((response) => {
            expect(response.status).to.eq(200);
        });

    });
    it('DELETE - purchase order by ID', () => {
        cy.api({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/store/order/' + petID
        }).should((response) => {
            expect(response.status).to.eq(200);

        });
    });
});
describe('Petstore, User Endpoint', () => {
    const userData = [generateUser()]; // Generate a fake user
    it('POST - creates list of users with given input array', () => {
        // const userData = [generateUser()]; // Generate a fake user
        cy.api({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: userData
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it('GET - User by user name', () => {
        cy.api({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/${userData[0].username}`,

        }).should((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it('PUT - Update user information', () => {
        const updatedUserData = {
            ...userData, // Keep existing user data
            firstName: "UpdatedFirstName",
            lastName: "UpdatedLastName",
            email: "updated@example.com"
        };

        cy.api({
            method: 'PUT',
            url: `https://petstore.swagger.io/v2/user/${userData.username}`,
            body: updatedUserData
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

    });
    it('GET - Logs user into the system', () => {
        // const updatedUserData = {
        //     ...userData, // Keep existing user data
        // }
        cy.api({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/user/login`,
            qs: {
                username: userData[0].username,
                password: userData[0].password
            }
            // body: updatedUserData
        }).should((response) => {
            expect(response.status).to.eq(200);

        });
    });
    it('GET - Logs out current logged in user session', () => {
        // const updatedUserData = {
        //     ...userData, // Keep existing user data
        // }
        cy.api({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/user/logout'

            // body: updatedUserData
        }).should((response) => {
            expect(response.status).to.eq(200);

        });
    });
    it('DELETE - User', () => {
        cy.api({
            method: 'DELETE',
            url: `https://petstore.swagger.io/v2/user/${userData[0].username}`,
        }).should((response) => {
            expect(response.status).to.eq(200);

        });
    });
    it('POST - Creates list of users with given input array', () => {
        const userData = [generateUser(), generateUser()]; // Generate a fake user
        cy.api({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithArray',
            body: userData
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
    it('POST - Creates user', () => {
        const userData = generateUser(); // Generate a fake user
        cy.api({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: userData
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});










