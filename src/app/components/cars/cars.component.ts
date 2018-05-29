import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Array<Car>;
  pages: Array<number>;
  pageNumber = 0;
  totalPages = 0;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCar(id: string) {
    this.carService.getCar(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error.message);
      }
    );
  }

  getCars() {
    this.carService.getCars(this.pageNumber).subscribe(
      data => {
        this.cars = Car.fromJsonList(data._embedded.cars);
        this.pageNumber = data.page.number;
        this.pages = new Array(data.page.totalPages);
        this.totalPages = data.page.totalPages;
      },
      error => {
        console.log(error.message);
      }
    );
  }

  setPage(i, event: any) {
    event.preventDefault();
    this.pageNumber = i;
    this.getCars();
  }

}
