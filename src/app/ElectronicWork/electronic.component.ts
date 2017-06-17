import { Component, NgModule } from '@angular/core';

//服务
@Component({
  selector: 'electic-data',
  templateUrl: './electronic.component.html',
  styleUrls: ['./electronic.component.css'],
  providers: []
})
// @NgModule({
	// declarations: [
		// ElectronicTab
  // ]
// })
export class ElectronicWork {
	constructor(
        //public LoginService: LoginService
    ) {
        //console.log(this.userLoginService);
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  }
}
