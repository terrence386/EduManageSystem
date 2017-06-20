import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule ,Http} from '@angular/http';//导入服务模块
//路由
import { RouterModule }   from '@angular/router';

//服务
import { LoginService } from './Login/login.service';

import { AppComponent } from './app.component';

//在这里引入自己定义的模块组件
import { HeaderComponent } from './Header/Header.component';//导航
import { Login } from './Login/login.component';//登录
import { ElectronicWork } from './ElectronicWork/electronic.component';//电子作业
import { ElectronicTab } from './ElectronicWork/electronicTab/electronicTab.component';//电子作业tab
import { ElectronicTabContent } from './ElectronicWork/electronicTabContent/electronicTabContent.component';//电子作业主体内容



@NgModule({
	//声明组件
  declarations: [
    AppComponent,
	HeaderComponent,
	Login,
	ElectronicWork,
	ElectronicTab,
	ElectronicTabContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
	RouterModule.forRoot([//路由配置
		{
        path: '',
        component: Login
      },
	  {
		path:'elecWork',
		component:ElectronicWork
	  }
	])
  ],
  providers: [
	LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
