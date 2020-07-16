import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpMethodsService {

  constructor(private http:HttpClient) { }

  get(service):Observable<any>{
   return this.http.get(service);
  }

  post(service,params):Observable<any>{
    return this.http.post(service,params);
  }

  put(service,params):Observable<any>{
    return this.http.put(service,params);
  }

  deleteOneItem(service):Observable<any>{
    return this.http.delete(service);
  }

  getWithParams(service,params):Observable<any>{
    return this.http.get(service,{params:params});
  }

  deleteMultiItem(service):Observable<any>{
    return this.http.delete(service);
  }
}
