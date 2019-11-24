import { Car } from './car';
import { CarSpecs } from './specs';

export class TouringCar implements Car {
  id = 'touring-car';
  name = 'Touring Car';
  specs: CarSpecs = {
    inertiaScale: 1,
    mass: 1200,
    cgToFront: 2,
    cgToRear: 2,
    cgToFrontAxle: 1.25,
    cgToRearAxle: 1.25,
    cgHeight: 0.25,
    brakeForce: 22000,
    ebrakeForce: 4800,
    lockGrip: 2.7,
    tireGripFront: 18,
    tireGripRear: 18,
    engineForce: 22000,
    cornerStiffnessFront: 0.5,
    cornerStiffnessRear: 0.5,
    weightTransfer: 0.1,
    maxSteer: 0.95
  };

  constructor(specs?: CarSpecs) {
    if (specs) {
      this.specs = { ...this.specs, ...specs };
    }
  }
}
