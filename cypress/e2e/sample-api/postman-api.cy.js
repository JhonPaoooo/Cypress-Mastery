describe('Using Postman to Cypress - Update User', () => {
    const BASE_URL = 'http://localhost:3000/api/users';
    const AUTH_TOKEN = 'Bearer STATIC_TOKEN_123';

    describe('Using Postman to cypress', () => {
        it('POST - Create Users', () => {
            cy.api({
                method: 'POST',
                url: BASE_URL + '/register',
                body: {
                    name: "Hii Penduko",
                    email: "hii@email.com",
                    password: "pass123"
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('message');
                expect(response.body.message).to.eq('User registered');
                expect(response.body.user).to.have.property('id')
                expect(response.body.user).to.have.property('name')
                expect(response.body.user).to.have.property('email')


            });
        });
        it('POST - Login Users', () => {
            cy.api({
                method: 'POST',
                url: BASE_URL + '/login',
                body: {
                    email: "hii@email.com",
                    password: "pass123"
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
                expect(response.body.token).to.include('STATIC_TOKEN_123');
                console.log(response.body);


            });
        });
        it('PUT - Update User', () => {
            cy.api({
                method: 'PUT',
                url: BASE_URL + '/1', // Replace '123' with the actual user ID
                headers: {
                    Authorization: AUTH_TOKEN // Static token for authentication
                },
                body: {
                    name: "New ulit Penduko",
                    email: "grat@gmail.com",
                    password: "newpass123"
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('message');
                expect(response.body.message).to.eq('User updated');
                expect(response.body.user).to.have.property('id')
                expect(response.body.user).to.have.property('name')
                expect(response.body.user).to.have.property('email')
            });
        });
        it('GET - All user', () => {
            cy.api({
                method: 'GET',
                url: BASE_URL,
                headers: {
                    Authorization: AUTH_TOKEN // Static token for authentication
                },
            }).should((response) => {
                expect(response.status).to.eq(200);
                // expect(response.body).to.have.property('id')
                // expect(response.body).to.have.property('name')
                // expect(response.body).to.have.property('email')


            });
        });
        it('DELETE - User', () => {
            cy.api({
                method: 'DELETE',
                url: BASE_URL + '/3',
                headers: {
                    Authorization: AUTH_TOKEN // Static token for authentication
                },
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('User deleted');

            });
        });
    });
});