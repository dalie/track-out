import { Injectable } from '@angular/core';
import { TouringCar } from '../cars/touring';
import { CarSpecs } from '../cars/specs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() {}

  static create(id: string, specs?: CarSpecs) {
    if (id === 'touring-car') {
      return new TouringCar(specs);
    }
  }
}
