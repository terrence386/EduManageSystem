import { Component, Input, Output, NgModule} from '@angular/core'; //引入核心模块

import { LoginService } from './login.service';
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
export class Login {
	//定义是否显示登录框
	//isShowLogin = this.LoginService.isShowLogin
	constructor(
		private LoginService: LoginService
    ) {
        //console.log(this.userLoginService);
    }
	ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
	
  }
   public close(){
	   this.LoginService.closeLogin();
   }
}