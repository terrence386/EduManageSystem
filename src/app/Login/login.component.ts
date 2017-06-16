import { Component } from '@angular/core'; //引入核心模块

//添加元信息
@Component({
	selector: 'e-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

//导出组件
export class Login {
	isShow: boolean = true; //ng-if need declear its type
}