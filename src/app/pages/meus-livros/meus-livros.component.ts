import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaMeusLivrosService } from '../../services/lista-meus-livros.service'
import { AddMeusLivrosService } from '../../services/add-meus-livros.service'
import { DelMeusLivrosService } from '../../services/del-meus-livros.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-meus-livros',
  templateUrl: './meus-livros.component.html',
  styleUrls: ['./meus-livros.component.scss']
})
export class MeusLivrosComponent implements OnInit {

	@ViewChild('campoISBN', {static: false}) campoISBN:ElementRef;

	globals: Globals;
	postData = [];
	tempData = null;
	exibirAdicionarLivro = false;
	ISBNInvalido = false;

  constructor(
  	private httpService : ListaMeusLivrosService,
  	private addService : AddMeusLivrosService,
  	private delService : DelMeusLivrosService,
  	globals: Globals) { 
  		this.globals = globals;
  }

  ngOnInit() {
  	this.principal();
  }

  principal() {
  	this.httpService.postJSON()
       .subscribe(
          data => this.postData = data['books'],
          error => {
          	//console.log(error)
          },
          () => {
          	//console.log(this.postData);
          }
       );
  }

  addLivro() {
  	let livro = this.campoISBN.nativeElement.value;

  	this.addService.postJSON(livro)
       .subscribe(
          data => this.tempData = data,
          error => {
          	this.ISBNInvalido = true;
          	//console.log(error)
          },
          () => {
          	//console.log(this.tempData);
          	this.togleAddLivro();
          	this.principal();
          	this.campoISBN.nativeElement.value = "";
          }
       );
  }

  delLivro(livro) {
  	this.delService.postJSON(livro)
       .subscribe(
          data => this.tempData = data,
          error => {
          	//console.log(error)
          },
          () => {
          	//console.log(this.tempData);
          	this.principal();
          }
       );
  }

  togleAddLivro() {
  	if(this.exibirAdicionarLivro){
  		this.exibirAdicionarLivro = false;
  		this.ISBNInvalido = false;
  	}else{
  		this.exibirAdicionarLivro = true;
  	}
  }

  digitando() {
  	this.ISBNInvalido = false;
  }

}
