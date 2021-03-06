import faker from 'faker';
import { Mappable } from './CustomMap';

// force this class also match the interface's requirement
export class Company implements Mappable {
  companyName: string;
  catchPhrase: String;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company Name: ${this.companyName}</h1>
        <h3>CatchPhrase: ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
