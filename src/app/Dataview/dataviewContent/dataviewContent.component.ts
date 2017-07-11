import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import * as echarts from 'echarts';

//服务
@Component({
  selector: 'dataviewContent',
  templateUrl: './dataviewContent.component.html',
  styleUrls: ['./dataviewContent.component.css'],
  providers: []
})
//shegming
@NgModule({
  
})
// @Directive({
//   s
// })
 export class dataviewContent {
	constructor( //构造器
    ) {
    }
  ngOnInit(){//初始化加载事件 onInit
	document.body.style.margin = '0';
	console.log(this)
  //平均分
// 基于准备好的dom，初始化echarts实例
// $(function () {
 
// })

  //console.log(echarts)

  console.log(echarts)
   var myChart = echarts.init(document.getElementById('c_operating-data-average-chart'));
  console.log(myChart)

  // 指定图表的配置项和数据
  var option = {
    color: ['#96CEFD'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      right: '0%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['第1次课', '第1次课', '第1次课', '第1次课', '第1次课', '第1次课', '第1次课',
          '第1次课', '第1次课', '第1次课', '第1次课', '第1次课', '第1次课', '第1次课', '第1次课',
          '第1次课', '第1次课', '第1次课', '第1次课', '第1次课'
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 60,
        },
        axisLine: { show: false }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitNumber: 10,
        axisLine: { show: false },
        minInterval: 1

      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '40%',
        data: [70, 52, 52, 65, 39, 33, 70, 82, 67, 89, 72,
          70, 52, 52, 65, 39, 33, 70, 82, 67, 99, 72
        ]
      }
    ]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);



  }
}
