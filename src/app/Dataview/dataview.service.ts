import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { studentDataModel } from './studentData/studentDataModel/studentDataModel.component';//调入用户
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';//路由模块

@Injectable()
export class dataviewService {
	public userLoginURL = 'assets/mockData/userLoginMock.json';//设置路径
	//public subject: Subject<User> = new Subject<User>();
	//isShowLogin:boolean = false;
	//isLoggedin: boolean = false;
	showModel:boolean = false;
	constructor(
		public http:Http,//引入后需要在构造器中注册
		public router: Router,
	
	){}
	onInit(){//初始化加载
		console.log(this)
	}	
  
  public printModel(){ //点击打印班级报告
	 this.showModel = true;
  }
}
