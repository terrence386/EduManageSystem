import { Component } from '@angular/core';
//服务
@Component({
  selector: 'data-view',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css'],
  providers: []
})
export class dataView {
	constructor( //构造器
    ) {
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  }
}
