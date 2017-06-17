import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';

import { Login } from './login.component'
@Injectable()
export class LoginService {
		isShowLogin:boolean = false;
		isLoggedin: boolean = false;
   constructor(
	public http:Http,
   ){}
	onInit(){//初始化加载
		//console.log(Login)
	}

  public login(){//登录控制
	  console.log(this)
	  console.log('这是login')
	  //console.log(Login)
	  //console.log(typeof Login)
	 // console.log(Login.isShowLogin)
	  this.isShowLogin = true;
	  this.isLoggedin = !this.isLoggedin;
  }

  public logout():void{//退出控制
    // localStorage.removeItem("currentUser");
    // this.subject.next(Object.assign({}));
  }
  
  public closeLogin(){ //关闭登录弹窗
	  this.isShowLogin = false;
	  this.isLoggedin = false;
  }
}
