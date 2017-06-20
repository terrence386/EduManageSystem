import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, Headers, Response } from '@angular/http';
import { User } from './user-model/user-model';//调入用户

@Injectable()
export class LoginService {
	public userLoginURL = 'mockData/userLoginMock.json';
	public subject: Subject<User> = new Subject<User>();
	isShowLogin:boolean = false;
	isLoggedin: boolean = false;
	constructor(public http:Http){}
	onInit(){//初始化加载
		//console.log(Login)
	}
	//获取当前登录用户
	public get currentUser():Observable<User>{
		return this.subject.asObservable();
	}
	public clickLogin(){
		this.isShowLogin = true;
		this.isLoggedin = !this.isLoggedin;
	}
	public dologin(user:User){//登录控制
	console.log(this)
		return this.http
            .get(this.userLoginURL)
            .map((response: Response) => {
              let user = response.json();
              console.log("user object>"+user);
              if(user && user.token){
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
		//console.log(this)
              }
              return response;
            })
            .subscribe(
                data => {
                    console.log("login success>"+data);
                },
                error => {
                    console.error(error);
                }
            );
		
  }

  public logout():void{//退出控制
	localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
  
  public closeLogin(){ //关闭登录弹窗
	  this.isShowLogin = false;
	  this.isLoggedin = false;
  }
}
