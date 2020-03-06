import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import {Headers} from '@angular/http'
import { backendIp, backendPort, useHttps } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class RealizaLoginService {

  constructor(private _http : Http) { }
   
   postJSON(username, password) {
   		var url;

   		if(useHttps){
   			url = "https://" + backendIp + ":" + backendPort;
   		}else{
   			url = "http://" + backendIp + ":" + backendPort;
   		}

   		url += "/accounts/login/"

        var json = JSON.stringify({'email': username, 'password': password});
        var params = json;
        var cabe = new Headers();
        cabe.append('Content-Type', 'application/json');
        return this._http.post(url, 
        params, {
                 headers : cabe
                })
                .pipe(map(res=> res.json()));
    }

}
