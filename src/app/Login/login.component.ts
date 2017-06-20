import { Component, Input, Output, NgModule, OnInit} from '@angular/core'; //引入核心模块
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';//路由模块

import { User } from './user-model/user-model';//导入用户
import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
//添加元信息
@Component({
	selector: 'e-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})
@NgModule({
	providers:[
		LoginService
	]
})
//导出组件
export class Login implements OnInit{
	//定义是否显示登录框
	//isShowLogin = this.LoginService.isShowLogin
	public user:User = new User();//定义User
	constructor(
		public router: Router,
		private LoginService: LoginService,
		public activatedRoute: ActivatedRoute,
    ) {
        //console.log(this.userLoginService);
    }
	ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
		let activatedRouteSnapshot:ActivatedRouteSnapshot=this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;
	
  }
	public login ():void{
		//this.router.navigateByUrl("elecWork");
		// console.log(this.router.navigateByUrl)
		this.LoginService.dologin(this.user);
		//this.router.navigateByUrl("elecWork");//路由跳转
	}
	public close(){
	   this.LoginService.closeLogin();
   }
}