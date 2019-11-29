import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/cars/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {
  cars: Car[] = [];
  selectedCar: Car;
  constructor() {}

  ngOnInit() {
    this.cars.push(CarService.create('touring-car', { engineForce: 30000 }));
    this.cars.push(CarService.create('touring-car'));
    this.cars.push(CarService.create('touring-car'));
    this.cars.push(CarService.create('touring-car'));

    this.selectedCar = this.cars[1];
  }
}
