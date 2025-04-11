
import { faker } from '@faker-js/faker';  // Import Faker.js


export const testData = () => {

    let userNameString = faker.person.firstName()
    let userNameNumeric = faker.string.numeric(4)
    let userName = userNameString + userNameNumeric;

    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number(),
      ssn: faker.string.numeric(9),
      username: faker.internet.username(),
      password: faker.internet.password(),
    };
  };