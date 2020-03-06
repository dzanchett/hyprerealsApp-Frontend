import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaMensagensService } from '../../services/lista-mensagens.service'
import { RecebeMensagensService } from '../../services/recebe-mensagens.service'
import { EnviaMensagemService } from '../../services/envia-mensagem.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

	@ViewChild('campoResposta', {static: false}) campoResposta:ElementRef;
  @ViewChild('controlaAltura', {static: false}) controlaAltura:ElementRef;

	globals: Globals;
	postData = [];
	mensagensData = []
	exibirMenuChat = true;
	usuarioMensagem = null;
	idInterval = null;
	meuUsuario = "";
  myScrollVariable = 10;

  constructor(
  	private httpService : ListaMensagensService,
  	private recebeMensagensService : RecebeMensagensService,
  	private enviaMensagemService : EnviaMensagemService,
  	globals: Globals
  	) { 
  	this.globals = globals;
  	this.meuUsuario = this.globals.username;
  }

  ngOnInit() {
  	this.principal();

  	this.idInterval = setInterval(() => {
    	this.atualizaMensagens(); 
  	}, 5000);
  }

  ngAfterViewChecked() {
    this.scrollToBottom(); // For messsages already present
    
  }

  ngOnDestroy() {
  	if (this.idInterval) {
    	clearInterval(this.idInterval);
  	}
  }

  atualizaMensagens(){
  	if(this.usuarioMensagem != null){
  		this.meuUsuario = this.globals.username;
  		this.recebeMensagens(this.usuarioMensagem);
  	}
  }

  principal() {
  	this.httpService.postJSON()
       .subscribe(
          (data) => {
          	this.postData = data['users'];
          },
          (error) => {
          	//console.log(error)
          },
          () => {
          	//console.log(this.postData);
          }
       );
  }

  recebeMensagens(usuario) {
  	this.recebeMensagensService.postJSON(usuario)
       .subscribe(
          (data) => {
          	this.mensagensData = data['messages'];
            this.principal();
          },
          (error) => {
          	//console.log(error)
          },
          () => {
          	//console.log(this.postData);
          }
       );
  }

  enviaMensagem() {
  	let mensagem = this.campoResposta.nativeElement.value;

  	this.enviaMensagemService.postJSON(this.usuarioMensagem, mensagem)
       .subscribe(
          (data) => {
          	this.campoResposta.nativeElement.value = "";
          	this.recebeMensagens(this.usuarioMensagem);
          },
          (error) => {
            this.campoResposta.nativeElement.value = "";
          	//console.log(error)
          },
          () => {
          	//console.log(this.postData);
          }
       );
  }

  abrirMenuChat() {
  	this.exibirMenuChat = true;
  	this.usuarioMensagem = null;
  }

  abrirConversa() {
  	this.exibirMenuChat = false;
  }

  ativaRecebeMensagens(usuario) {
  	this.usuarioMensagem = usuario;
  	this.recebeMensagens(usuario);
  	this.abrirConversa();
  }

  scrollToBottom() {
    try {
      console.log('scrollToBottom called');
      this.controlaAltura.nativeElement.scrollTop = this.controlaAltura.nativeElement.scrollHeight;
    } catch (err) {
      console.log(err);
    }
  }

}
