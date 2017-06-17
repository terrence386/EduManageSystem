import { Component } from '@angular/core';
//服务
import { LoginService } from './Login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
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
		this.LoginService.login();
		//console.log(this)
    }
}
