import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
  }
}
