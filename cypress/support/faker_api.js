import { faker } from '@faker-js/faker';

export const generateUser = () => {
    return {
        id: faker.number.int({ min: 1, max: 1000 }),
        username: faker.internet.username(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number(),
        userStatus: faker.number.int({ min: 0, max: 1 })
    };
};
// export const generateUsername = () => {
//     return faker.internet.username(); // ✅ Function to get only a username
// };