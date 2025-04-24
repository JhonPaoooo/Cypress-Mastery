// describe('Using Postman to Cypress - Update User', () => {

    import { fakdetail, fakedetail } from '../support/postman_api';

    const BASE_URL = 'http://localhost:3000/api/users';
    const AUTH_TOKEN = 'Bearer STATIC_TOKEN_123';

    describe('Using Postman to cypress', () => {

        let userId;
        let createdUserName;
        let createdUserEmail;
        let createdPassword;

        it('POST - Create Users', () => {
            const fakedata = fakedetail();
            cy.api({
                method: 'POST',
                url: BASE_URL + '/register',
                body: fakedata,
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('message');
                expect(response.body.message).to.eq('User registered');
                expect(response.body.user).to.have.property('id')
                expect(response.body.user).to.have.property('name')
                expect(response.body.user).to.have.property('email')

                userId = response.body.user.id;
                createdUserName = response.body.user.name;
                createdUserEmail = response.body.user.email;
                createdPassword = response.body.password;
            });
        });
        it('POST - Login Users', () => {
            cy.api({
                method: 'POST',
                url: BASE_URL + '/login',
                body: {
                    email: createdUserEmail,
                    password: 'password123'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('token');
                expect(response.body.token).to.include('STATIC_TOKEN_123');
                console.log(response.body);


            });
        });
        it('PUT - Update User', () => {
            const putUser = fakedetail();
            cy.api({
                method: 'PUT',
                url: `${BASE_URL}/${userId}`, // Ensure userId is dynamically added
                headers: {
                    Authorization: AUTH_TOKEN // Static token for authentication
                },
                body: putUser
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
                url: `${BASE_URL}/${userId}`, // Ensure userId is dynamically added
                headers: {
                    Authorization: AUTH_TOKEN // Static token for authentication
                },
            }).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.message).to.eq('User deleted');

            });
        });
    });
// });