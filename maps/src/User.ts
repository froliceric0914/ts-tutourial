import faker from 'faker';
import { Mappable } from './CustomMap';
export class User implements Mappable {
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

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.name}</h1>
      </div>
    `;
  }
}
