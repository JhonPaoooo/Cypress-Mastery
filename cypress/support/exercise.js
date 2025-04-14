import { faker } from '@faker-js/faker';

export function exercise() {

    return {
      name: faker.person.fullName(),
      emailAddress: faker.internet.email(),
      password: faker.internet.password(),
      city: faker.location.city(),
      day: faker.number.int({ min: 1, max: 31 }),
      month: faker.number.int({ min: 1, max: 12 }),
      year: String(faker.number.int({ min: 1900, max: 2021 })),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.secondaryAddress(),
      addRess: faker.location.secondaryAddress(),
      country: faker.number.int({ min: 1, max: 7 }),
      state: faker.location.state(),
      city: faker.location.city(),
      zipCode: faker.location.zipCode(),
      phoneNumber: faker.phone.number()

      
    };
  }