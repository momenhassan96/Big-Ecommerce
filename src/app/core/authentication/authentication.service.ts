import { Injectable } from '@angular/core';
import { User } from '../../shared/models/user';
import { HttpMethodsService } from 'src/app/shared/services/http-methods.service';
import { Subject , BehaviorSubject, Observable, from} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  currentUser = new Subject();
  isAuthourized =  new BehaviorSubject('false');
  getCurrentUser:User;
  constructor(private http:HttpMethodsService) {}
  
  login(data){
    this.http.post('Auth/Login',data).subscribe(userData=>{
      localStorage.setItem('token',userData);
      localStorage.setItem('userData',userData.user);
      this.currentUser.next(userData.user);
      this.isAuthourized.next('true');
    });
  }

  register(userData:User){
    this.http.post('Auth/register',userData).subscribe(res=>{
      console.log(res);
    })
  }

  getToken(){
    return JSON.parse(localStorage.getItem('token'));
  }

  getUSer():Observable<User>{
   return this.currentUser.pipe(
      map((userData:User)=>{
      this.getCurrentUser = userData;
      return this.getCurrentUser;
    }))
  }

  logOut(){
    this.isAuthourized.next('false');
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
  }

  isAuthanticated(){

  }

}
