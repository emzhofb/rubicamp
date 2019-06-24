class CarFactory {
  constructor(car, sold) {
    // super(car, sold);
    this.car = car;
    this.totalCar = Math.random() * sold;
  }

  setCar(newCar) {
    this.car = newCar;
  }

  setTotalCar(newSold) {
    this.totalCar = newSold;
  }

  getCar() {
    return this.car;
  }

  getTotalCar() {
    return this.totalCar;
  }

  resultArea() {
    const resultCarFactory = `This car ${this.car} has been sold ${
      this.totalCar
    } times per months`;
    return resultCarFactory;
  }
}

class Car {
  constructor(merk) {
    // super(merk);
    this.merk = merk;
  }

  setMerk(newMerk) {
    this.merk = newMerk;
  }

  getMerk() {
    return this.merk;
  }

  resultArea() {
    const carMerk = `This car is produced by ${this.merk}`;
    return carMerk;
  }
}

class Tyre {
  constructor(totalTyre) {
    // super(totalTyre);
    this.totalTyre = totalTyre;
  }

  setTotalTyre(newTotalTyre) {
    this.totalTyre = newTotalTyre;
  }

  getTotalTyre() {
    return this.totalTyre;
  }

  resultArea() {
    const totalTyreOfCar = `This car has ${this.totalTyre} tyres`;
    return totalTyreOfCar;
  }
}

class Seat {
  constructor(totalSeat) {
    // super(totalSeat);
    this.totalSeat = totalSeat;
  }

  setSeat(newTotalSeat) {
    this.totalSeat = newTotalSeat;
  }

  getSeat() {
    return this.totalSeat;
  }

  resultArea() {
    const totalOfSeat = `This car has ${this.totalSeat} seats`;
    return totalOfSeat;
  }
}

class Door {
  constructor(doorType) {
    // super(doorType);
    this.doorType = doorType;
  }

  setDoorType(newDoorType) {
    this.doorType = newDoorType;
  }

  getDoorType() {
    return this.doorType;
  }

  resultArea() {
    const typeOfDoor = `This car has ${this.doorType} type of door`;
    return typeOfDoor;
  }
}

class Body {
  constructor(bodyType) {
    // super(bodyType);
    this.bodyType = bodyType;
  }

  setBodyType(newBodyType) {
    this.bodyType = newBodyType;
  }

  getBodyType() {
    return this.bodyType;
  }

  resultArea() {
    const typeOfBody = `This car has ${this.bodyType} type of body`;
    return typeOfBody;
  }
}

class Engine {
  constructor(engineType) {
    // super(engineType);
    this.engineType = engineType;
  }

  setEngineType(newEngineType) {
    this.engineType = newEngineType;
  }

  getEngineType() {
    return this.engineType;
  }
}

class Honda extends Car {
  constructor(tyre, seat, door, body, engine) {
    super(tyre, seat, door, body, engine);
    this.tyre = tyre;
    this.seat = seat;
    this.door = door;
    this.body = body;
    this.engine = engine;
  }

  setTyre(newTyre) {
    this.tyre = newTyre;
  }

  setSeat(newSeat) {
    this.seat = newSeat;
  }

  setDoor(newDoor) {
    this.door = newDoor;
  }

  setBody(newBody) {
    this.body = newBody;
  }

  setEngine(newEngine) {
    this.engine = newEngine;
  }

  getTyre() {
    return this.tyre;
  }

  getSeat() {
    return this.seat;
  }

  getDoor() {
    return this.door;
  }

  getBody() {
    return this.body;
  }

  getEngine() {
    return this.engine;
  }

  resultArea() {
    const theCar = `Honda with ${this.tyre} tyres, ${this.seat} seats, ${this.door} doors, ${
      this.body
    } type of body, and with ${this.engine} engine`;
    return theCar;
  }
}

class Toyota extends Car {
  constructor(tyre, seat, door, body, engine) {
    super(tyre, seat, door, body, engine);
    this.tyre = tyre;
    this.seat = seat;
    this.door = door;
    this.body = body;
    this.engine = engine;
  }

  setTyre(newTyre) {
    this.tyre = newTyre;
  }

  setSeat(newSeat) {
    this.seat = newSeat;
  }

  setDoor(newDoor) {
    this.door = newDoor;
  }

  setBody(newBody) {
    this.body = newBody;
  }

  setEngine(newEngine) {
    this.engine = newEngine;
  }

  getTyre() {
    return this.tyre;
  }

  getSeat() {
    return this.seat;
  }

  getDoor() {
    return this.door;
  }

  getBody() {
    return this.body;
  }

  getEngine() {
    return this.engine;
  }

  resultArea() {
    const theCar = `Toyota with ${this.tyre}, ${this.seat}, ${this.door}, ${
      this.body
    }, and ${this.engine}`;
    return theCar;
  }
}

class Suzuki extends Car {
  constructor(tyre, seat, door, body, engine) {
    super(tyre, seat, door, body, engine);
    this.tyre = tyre;
    this.seat = seat;
    this.door = door;
    this.body = body;
    this.engine = engine;
  }

  setTyre(newTyre) {
    this.tyre = newTyre;
  }

  setSeat(newSeat) {
    this.seat = newSeat;
  }

  setDoor(newDoor) {
    this.door = newDoor;
  }

  setBody(newBody) {
    this.body = newBody;
  }

  setEngine(newEngine) {
    this.engine = newEngine;
  }

  getTyre() {
    return this.tyre;
  }

  getSeat() {
    return this.seat;
  }

  getDoor() {
    return this.door;
  }

  getBody() {
    return this.body;
  }

  getEngine() {
    return this.engine;
  }

  resultArea() {
    const theCar = `Suzuki with ${this.tyre}, ${this.seat}, ${this.door}, ${
      this.body
    }, and ${this.engine}`;
    return theCar;
  }
}

const mobilio = new Honda();

const tyreOfMobilio = new Tyre();
tyreOfMobilio.setTotalTyre(4);
const seatOfMobilio = new Seat();
seatOfMobilio.setSeat(6);
const doorOfMobilio = new Door();
doorOfMobilio.setDoorType("Sliding");
const bodyOfMobilio = new Body();
bodyOfMobilio.setBodyType("SUV");
const engineOfMobilio = new Engine("Piston");

mobilio.setTyre(tyreOfMobilio.totalTyre);
mobilio.setSeat(seatOfMobilio.totalSeat);
mobilio.setDoor(doorOfMobilio.doorType);
mobilio.setBody(bodyOfMobilio.bodyType);
mobilio.setEngine(engineOfMobilio.engineType);

console.log(`${mobilio.resultArea()} called Mobilio.`);
