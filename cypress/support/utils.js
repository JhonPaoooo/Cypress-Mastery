import { faker } from '@faker-js/faker';

export function createUser() {

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address : faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(), // pwedeng custom test data yung phone number
      ssn: faker.string.numeric(9),
      //username: faker.internet.username(),
      username: faker.internet.username(),
      password: faker.internet.password(),
    };
  }