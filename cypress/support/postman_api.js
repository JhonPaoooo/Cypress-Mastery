import { faker } from '@faker-js/faker';

export function fakedetail() {

    return {
        id: faker.number.int({ min: 1, max: 1000 }),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        // password: faker.internet.password({ length: 12, memorable: false }),


    };
}