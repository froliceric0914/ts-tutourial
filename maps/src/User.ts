import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number; // user.
    lng: number; //user
  };

  // declare the initial values
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}
