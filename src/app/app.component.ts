import { Component } from '@angular/core';

import { User } from './Login/user-model/user-model';//导入用户
//服务
import { LoginService } from './Login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
	public currentUser:User;
	constructor(
        public LoginService: LoginService
    ) {
        //console.log(this.userLoginService);
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  }
  public showLogin():void{
		//app.isShowLogin = !isShowLogin;
		this.LoginService.clickLogin();
		//console.log(this)
    }
}
