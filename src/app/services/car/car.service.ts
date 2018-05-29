import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Car } from '../../models/car.model';
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {
  private BASE_URL_CAR = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) { }

  getCars(page: number): Observable<any> {
    return this.http.get(`${this.BASE_URL_CAR}?page=${page}`);
  }

  getCar(id: string): Observable<Car> {
    return this.http.get<any>(`${this.BASE_URL_CAR}/${id}`)
      .map(car => Car.fromJson(car));
  }

}

