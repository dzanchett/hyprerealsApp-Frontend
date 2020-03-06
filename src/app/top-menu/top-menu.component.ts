import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Globals } from '../services/global.service'
import { RealizaLogoutService } from '../services/realiza-logout.service'
import { LocalizacaoService } from '../services/localizacao.service'
import { EnviaLocalizacaoService } from '../services/envia-localizacao.service'

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  globals: Globals;

  postData = null;
  idInterval = null;

  //constructor() {
  constructor(
  	globals: Globals,
  	private router: Router,
  	private realizaLogoutService : RealizaLogoutService,
    private localizacaoService : LocalizacaoService,
    private enviaLocalizacaoService : EnviaLocalizacaoService,
  	) {
  	this.globals = globals;

  	var storage = JSON.parse(localStorage.getItem('hypperreals'));

  	if(storage != null){
  		this.globals.isUserLogged = storage.var1;
      this.globals.emailUser = storage.var2;
      this.globals.username = storage.var3;
  	}
  }

  ngOnInit() {
    this.obterPosicao();

    this.idInterval = setInterval(() => {
      this.obterPosicao(); 
    }, 5000);
  }

  ngOnDestroy() {
    if (this.idInterval) {
      clearInterval(this.idInterval);
    }
  }

  obterPosicao() {
    if(this.globals.isUserLogged == true){
      this.localizacaoService.getPosition().then(pos=>
      {
         this.enviaLocalizacaoService.postJSON(pos.lat, pos.lng)
         .subscribe(
            (data) => {
              console.log("Localização enviada!");
            },
            (error) => {
              //console.log(error)
            },
            () => {
              //console.log(this.postData);
            }
         );
      });
    }
  }

  onLogout() {
  	this.realizaLogoutService.postJSON()
  		.subscribe(data => this.postData = data,
          error => {
          	console.log(error);
          },
          () => {
          	this.globals.isUserLogged = false;
          	localStorage.setItem('hypperreals', JSON.stringify({ 'var1': false }));
          	this.router.navigate(['']);
          });
  }

}
