import { Component } from '@angular/core';
import  echarts from 'echarts';


//服务
import  { dataviewService } from '../../dataview.service';

@Component({
  selector: 'student-datamodel',
  templateUrl: './studentDataModel.component.html',
  styleUrls: ['./studentDataModel.component.css'],
  providers: [dataviewService]
})
export class studentDataModel {
	constructor( //构造器
     public dataviewService: dataviewService
    ) {

    }
  ngOnInit(){//初始化加载事件 onInit
	console.log(this)

  }
  public closeModel(){
    this.dataviewService.showModel = false;
    console.log(this.dataviewService.showModel)
    $('.modal-backdrop').fadeOut()
  }
}
