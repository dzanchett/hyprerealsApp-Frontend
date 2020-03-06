import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { RealizaCadastroService } from '../../services/realiza-cadastro.service'

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  @ViewChild('campoNomeUsuario', {static: false}) campoNomeUsuario:ElementRef;
  @ViewChild('campoEmail', {static: false}) campoEmail:ElementRef;
  @ViewChild('campoSenha', {static: false}) campoSenha:ElementRef;

  postData = null;
  alerta = 0;

  nomeUsuarioValido = 0;
  emailValido = 0;
  senhaValido = 0;

  constructor(
  		private router: Router,
  		private httpService : RealizaCadastroService
  	) { }

  ngOnInit() {
  }

  verificaNomeUsuario(){
  	let username = this.campoNomeUsuario.nativeElement.value;

  	if(username == "" || username == null){
  		this.nomeUsuarioValido = -1;
  	}else{
  		this.nomeUsuarioValido = 1;
  	}
  }

  verificaEmail(){
  	let email = this.campoEmail.nativeElement.value;

  	if(!email.match("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")){
  		this.emailValido = -1;
  	}else{
  		this.emailValido = 1;
  	}
  }

  verificaSenha(){
  	let senha = this.campoSenha.nativeElement.value;

  	if(!senha.match("^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{6,}$")){
  		this.senhaValido = -1;
  	}else{
  		this.senhaValido = 1;
  	}
  }

  onTestPost() {
  	    let username = this.campoNomeUsuario.nativeElement.value;
  		let email = this.campoEmail.nativeElement.value;
  		let senha = this.campoSenha.nativeElement.value;

  		if(this.nomeUsuarioValido==-1 || this.emailValido==-1 || this.senhaValido==-1){
  			this.alerta = 2;
  			return;
  		}

       this.httpService.postJSON(username, email, senha)
       .subscribe(
          data => this.postData = data,
          error => {
            let body = JSON.parse(error._body);

            if(body.hasOwnProperty('email') && body.email == "unique"){
              this.alerta = 3;
            }else if(body.hasOwnProperty('canonical_username') && body.canonical_username == "unique"){
              this.alerta = 4;
            }else{
              this.alerta = 1;
            }
          },
          () => {
          	this.alerta = 0;
          	this.router.navigate(['login']);
          }
       );
   }

}
