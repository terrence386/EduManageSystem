import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//路由
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';

//在这里引入自己定义的模块组件
import { HeaderComponent } from './Header/Header.component'

@NgModule({
	//声明组件
  declarations: [
    AppComponent,
	HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
