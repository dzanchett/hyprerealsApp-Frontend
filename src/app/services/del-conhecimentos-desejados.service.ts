import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { map } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import {Headers} from '@angular/http'
import { backendIp, backendPort, useHttps, Globals } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class DelConhecimentosDesejadosService {

  globals: Globals;

  constructor(private _http : Http, globals: Globals) {
  	this.globals = globals;
  }
   
   postJSON(conhecimento) {
   		var url;

   		if(useHttps){
   			url = "https://" + backendIp + ":" + backendPort;
   		}else{
   			url = "http://" + backendIp + ":" + backendPort;
   		}

   		url += "/knowledge/desired/delete/"

        var json = JSON.stringify({'email': this.globals.emailUser, 'knowledge': conhecimento});
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
