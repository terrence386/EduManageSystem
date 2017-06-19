import { Component, OnInit } from '@angular/core';
//服务
@Component({
  selector: 'electicTabContent',
  templateUrl: './electronicTabContent.component.html',
  styleUrls: ['./electronicTabContent.component.css'],
  providers: []
})
export class ElectronicTabContent implements OnInit {
	constructor( ) {//构造器
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this+"is 电子作业主体内容" )
	console.log(jQuery)
	//tab切换
	 // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // // Get the name of active tab
        // var activeTab = $(e.target).text();
		// console.log(activeTab)
        // // Get the name of previous tab
        // var previousTab = $(e.relatedTarget).text();
        // $(".active-tab span").html(activeTab);
        // $(".previous-tab span").html(previousTab);
    // });
	// $('#myTab').on('click','li',function(e){
		// if(e.preventDefault){
			// e.preventDefault();
		// }else{
			// e.stopPropagation();
		// }
		// if(!($(this).hasClass('active'))){
			// $(this).addClass('active');
			// $(this).siblings().removeClass('active');
			// var curText = $(this).attr('href');
			// console.log($(this).find('a').attr('href'))
			// console.log($('#curText'));
			// $('#curText').addClass('active in');
			// $('#curText').siblings().removeClass('active');
			// //console.log($(this).text())
		// }
	// })
   }
}
