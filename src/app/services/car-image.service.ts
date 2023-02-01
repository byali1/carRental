import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl:string ="https://localhost:44332/api/";

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>{
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
     }

     getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
      let newPath = this.apiUrl + "CarImages/getbycarid?carId="+carId 
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);     
     }

}
