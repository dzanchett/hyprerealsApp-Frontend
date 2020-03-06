import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaLivrosDesejadosService } from '../../services/lista-livros-desejados.service'
import { AddLivrosDesejadosService } from '../../services/add-livros-desejados.service'
import { DelLivrosDesejadosService } from '../../services/del-livros-desejados.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-livros-desejados',
  templateUrl: './livros-desejados.component.html',
  styleUrls: ['./livros-desejados.component.scss']
})
export class LivrosDesejadosComponent implements OnInit {

  @ViewChild('campoISBN', {static: false}) campoISBN:ElementRef;

	globals: Globals;
	postData = [];
	tempData = null;
	exibirAdicionarLivro = false;
	ISBNInvalido = false;

  constructor(
  	private httpService : ListaLivrosDesejadosService,
  	private addService : AddLivrosDesejadosService,
  	private delService : DelLivrosDesejadosService,
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
          data => {
            this.tempData = data;
            //console.log(data);
          },
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
