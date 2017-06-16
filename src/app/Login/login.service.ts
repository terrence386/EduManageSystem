import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
//import { User } from '../model/user-model';

import { Login } from './login.component'
@Injectable()
export class LoginService {
	data:{
		isShowLogin:true
	}
  constructor(
	public http:Http,
	public data:data
  ){}
	onInit(){
		//console.log(Login.isShowLogin)
	}
  // public get currentUser():Observable<User>{
     // // return this.subject.asObservable();
  // }

  public login(){
	  
	  console.log(this)
	  console.log('这是login')
	  console.log(Login)
	  console.log(typeof Login)
	 // console.log(Login.isShowLogin)
	//  this.isShowLogin = !this.isShowLogin;
    // return this.http
            // .get(this.userLoginURL)
            // .map((response: Response) => {
              // let user = response.json();
              // console.log("user object>"+user);
              // if(user && user.token){
                // localStorage.setItem("currentUser",JSON.stringify(user));
                // this.subject.next(Object.assign({},user));
              // }
              // return response;
            // })
            // .subscribe(
                // data => {
                    // console.log("login success>"+data);
                // },
                // error => {
                    // console.error(error);
                // }
            // );
  }

  public logout():void{
    // localStorage.removeItem("currentUser");
    // this.subject.next(Object.assign({}));
  }
}
