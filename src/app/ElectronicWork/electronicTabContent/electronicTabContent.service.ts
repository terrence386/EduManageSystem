import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class LoginService {
   constructor(
	public http:Http,
   ){}
	onInit(){//初始化加载
		//console.log(Login)
	}

  public ControlTab(){//TabControl
	
  }

}
