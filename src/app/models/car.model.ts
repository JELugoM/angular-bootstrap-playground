import * as decomposeUrl from 'decompose-url';
import 'rxjs/add/operator/map';

export class Car {
  private carMake: string;
  private carModel: string;
  private carYear: string;
  private id?: string;

  constructor() {}

  /**
   * Getter $carMake
   * @return {string}
   */
  public get $carMake(): string {
    return this.carMake;
  }

  /**
   * Getter $carModel
   * @return {string}
   */
  public get $carModel(): string {
    return this.carModel;
  }

  /**
   * Getter $carYear
   * @return {string}
   */
  public get $carYear(): string {
    return this.carYear;
  }

  /**
   * Getter $carUrl
   * @return {string}
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Setter $carMake
   * @param {string} value
   */
  public set $carMake(value: string) {
    this.carMake = value;
  }

  /**
   * Setter $carModel
   * @param {string} value
   */
  public set $carModel(value: string) {
    this.carModel = value;
  }

  /**
   * Setter $carYear
   * @param {string} value
   */
  public set $carYear(value: string) {
    this.carYear = value;
  }

  /**
   * Setter $carUrl
   * @param {string} value
   */
  public set $id(value: string) {
    this.id = value;
  }

  static fromJson({carMake, carModel, carYear, _links}): Car {
    const car = new Car();
    car.$carMake = carMake;
    car.$carModel = carModel;
    car.$carYear = carYear;
    car.$id = decomposeUrl(_links.car.href).path[1];
    return car;
  }

  static fromJsonList(carList): Car[] {
    return carList.map(car => Car.fromJson(car));
  }
}
