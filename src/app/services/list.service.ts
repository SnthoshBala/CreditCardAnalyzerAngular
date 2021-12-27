import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../Models/CustomerSend';

@Injectable({
  providedIn: 'root'
})
export  class ListService {

  public endpoint = 'http://localhost:8000';



  chosenItem: any = {}
  //  http!: HttpClient;

  constructor(private httpClient: HttpClient) { }

  getItemList() {
    return this.httpClient.get(this.endpoint)
  }
}


