import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import {Headers} from '@angular/http'
import { backendIp, backendPort, useHttps, Globals } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EnviaLocalizacaoService {

  globals: Globals;

  constructor(private _http : Http, globals: Globals) {
  	this.globals = globals;
  }
   
   postJSON(latitude, longitude) {
   		var url;

   		if(useHttps){
   			url = "https://" + backendIp + ":" + backendPort;
   		}else{
   			url = "http://" + backendIp + ":" + backendPort;
   		}

   		url += "/accounts/localization/"

        var json = JSON.stringify({'email': this.globals.emailUser, 'latitude': latitude, 'longitude': longitude});
        var params = json;
        var cabe = new Headers();
        cabe.append('Content-Type', 'application/json');
        //cabe.append('sessionid', 'i2zffpfavq26df33uufugsz2gp5sewif');
        return this._http.post(url, 
        params, {
                 headers : cabe
                })
                .pipe(map(res=> res.json()));
    }
}
