interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `name:${this.name}`;
  }
};

const pepsi = {
  sugar: 80,
  carbonate: true,
  summary(): string {
    return `this drink contains ${this.sugar} g`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const printReportable = (reportObject: Reportable): void => {
  console.log(reportObject.summary());
};

printVehicle(oldCivic);

printReportable(oldCivic);
printReportable(pepsi);
