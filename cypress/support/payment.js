import { faker } from '@faker-js/faker';

export function payment() {

    return {
      nameCard: faker.person.fullName(),
      cardNumber: faker.number.int({ min: 5, max: 10 }),
      cvc: faker.number.int({ min: 100, max: 999 }),
      exp: faker.date.month().slice(0, 3),
      expy: faker.number.int({ min: 1999, max: 2025 }),

      
    };
  }