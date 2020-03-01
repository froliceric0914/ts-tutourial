class Vehicle {
  constructor(public color: string) {}

  //   drive(): void {
  //     console.log('I am a driver');
  //   }
  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(public wheele: number, color: string) {
    super(color);
  }
  //override the method
  private drive(): void {
    console.log('I am a car');
  }
  startDrivingProvess(): void {
    this.drive();
  }
}

//this is a new instance
const vehicle = new Vehicle('orange');

console.log(vehicle.color);

const car = new Car('red');
car.startDrivingProvess();
