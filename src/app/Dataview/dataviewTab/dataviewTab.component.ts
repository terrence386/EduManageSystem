import { Component } from '@angular/core';
//服务
@Component({
  selector: 'dataviewTab',
  templateUrl: './dataviewTab.component.html',
  styleUrls: ['./dataviewTab.component.css'],
  providers: []
})
export class dataviewTab {
	constructor( //构造器
    ) {
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  }
}
