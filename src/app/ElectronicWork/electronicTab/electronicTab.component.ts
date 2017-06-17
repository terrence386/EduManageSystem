import { Component } from '@angular/core';
//服务
@Component({
  selector: 'electicTab',
  templateUrl: './electronicTab.component.html',
  styleUrls: ['./electronicTab.component.css'],
  providers: []
})
export class ElectronicTab {
	constructor( //构造器
    ) {
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  }
}
