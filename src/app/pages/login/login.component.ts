import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { RealizaLoginService } from '../../services/realiza-login.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('campoEmail', {static: false}) campoEmail:ElementRef;
  @ViewChild('campoSenha', {static: false}) campoSenha:ElementRef;

  globals: Globals;

  postData = null;
  alerta = 0;

  constructor(
  	private router: Router,
  	private httpService : RealizaLoginService,
  	globals: Globals
  	) {
  		this.globals = globals;
  }

  ngOnInit() {
  }

  onTestPost() {
  		let email = this.campoEmail.nativeElement.value;
  		let senha = this.campoSenha.nativeElement.value;

       this.httpService.postJSON(email, senha)
       .subscribe(
          data => this.postData = data,
          error => {
          	console.log(error)
          	this.alerta = 4;
  			this.globals.isUserLogged = false;
          },
          () => {
          	switch(this.postData.messageCode){
          		case 1:
          			this.alerta = 0;
          			this.globals.isUserLogged = true;
                this.globals.emailUser = email;
                this.globals.username = this.postData.username;
          			localStorage.setItem('hypperreals', JSON.stringify({ 'var1': true, 'var2': email, 'var3': this.globals.username }));
          			this.router.navigate(['']);
          			break;
          		case 2:
          			this.alerta = 2;
          			this.globals.isUserLogged = false;
          			localStorage.setItem('hypperreals', JSON.stringify({ 'var1': false, 'var2': "", 'var3': "" }));
          			break;
          		case 3:
          			this.alerta = 0;
          			this.globals.isUserLogged = true;
                this.globals.emailUser = email;
                this.globals.username = this.postData.username;
          			localStorage.setItem('hypperreals', JSON.stringify({ 'var1': true, 'var2': email, 'var3': this.globals.username }));
          			this.router.navigate(['']);
          			break;
          	}
          }
       );
   }

}
