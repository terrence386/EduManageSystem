import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//路由
import { RouterModule }   from '@angular/router';

//服务
import { LoginService } from './Login/login.service';

import { AppComponent } from './app.component';

//在这里引入自己定义的模块组件
import { HeaderComponent } from './Header/Header.component';
import { Login } from './Login/login.component';

@NgModule({
	//声明组件
  declarations: [
    AppComponent,
	HeaderComponent,
	Login
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot([
		{
        path: '',
        component: Login
      }
	])
  ],
  providers: [
	LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
