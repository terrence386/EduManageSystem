import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user-model/user-model';//调入用户
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';//路由模块

@Injectable()
export class LoginService {
	public userLoginURL = 'assets/mockData/userLoginMock.json';//设置路径
	public subject: Subject<User> = new Subject<User>();
	isShowLogin:boolean = false;
	isLoggedin: boolean = false;
	constructor(
		public http:Http,
		public router: Router,
	
	){}
	onInit(){//初始化加载
		//console.log(Login)
	}
	//获取当前登录用户
	public get currentUser():Observable<User>{
		return this.subject.asObservable();
	}
	public clickLogin(){
		this.isShowLogin = true;
		
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
		console.log(this)
              }
			  console.log(response)
              return response;
            })
            .subscribe(
                data => {
                    console.log("login success>"+data);
					this.isLoggedin = true;
					this.router.navigateByUrl("elecWork");
					
                },
                error => {
                    console.error(error);
                }
            );
		
  }

  public logout():void{//退出控制
	localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
	this.router.navigateByUrl("");
	this.isLoggedin = false;
	this.isShowLogin = false;
  }
  
  public closeLogin(){ //关闭登录弹窗
	  this.isShowLogin = false;
	  this.isLoggedin = false;
  }
}
