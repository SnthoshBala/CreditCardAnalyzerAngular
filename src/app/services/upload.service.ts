import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerSend } from '../Models/CustomerSend';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private endpoint = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }

  postFiles(cust:CustomerSend):Observable<any>
  {
    const formData:FormData = new FormData();
    formData.append("file",cust.file)
    return this.httpClient.post(this.endpoint+"/pdf",formData)
  }

  getFiles(): Observable<any> {
    return this.httpClient.get(`${this.endpoint}/files`);
  }
  getVisualmage(custno:string):Observable<Blob>
  {
    return this.httpClient.get(this.endpoint+"/getVisual?cust="+custno,{ responseType: 'blob' })
  }
  getAllVisualmage():Observable<Blob>
  {
    return this.httpClient.get(this.endpoint+"/getAllVisual",{ responseType: 'blob' })
  }
  getUser(custno:string):Observable<any>
  {
    return this.httpClient.get(this.endpoint+"/user?cust="+custno)
  }
  getUserPie():Observable<any>
  {
    return this.httpClient.get(this.endpoint+"/getAllVisualPie")
  }
}