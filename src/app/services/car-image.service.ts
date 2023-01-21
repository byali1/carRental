import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImageResponseModel } from '../models/carImageResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl:string ="https://localhost:44332/api/carImages/getall";

  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<CarImageResponseModel>{
    return this.httpClient.get<CarImageResponseModel>(this.apiUrl);
     }
}
