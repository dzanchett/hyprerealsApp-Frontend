import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaMeusConhecimentosService } from '../../services/lista-meus-conhecimentos.service'
import { AddMeusConhecimentosService } from '../../services/add-meus-conhecimentos.service'
import { DelMeusConhecimentosService } from '../../services/del-meus-conhecimentos.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-meus-conhecimentos',
  templateUrl: './meus-conhecimentos.component.html',
  styleUrls: ['./meus-conhecimentos.component.scss']
})
export class MeusConhecimentosComponent implements OnInit {

  @ViewChild('campoConhecimento', {static: false}) campoConhecimento:ElementRef;

	globals: Globals;
	postData = [];
	tempData = null;
	exibirAdicionarConhecimento = false;
	conhecimentoInvalido = false;

  constructor(
  	private httpService : ListaMeusConhecimentosService,
  	private addService : AddMeusConhecimentosService,
  	private delService : DelMeusConhecimentosService,
  	globals: Globals) { 
  		this.globals = globals;
  }

  ngOnInit() {
  	this.principal();
  }

  principal() {
  	this.httpService.postJSON()
       .subscribe(
          data => this.postData = data['knowledges'],
          error => {
          	//console.log(error)
          },
          () => {
          	//console.log(this.postData);
          }
       );
  }

  addConhecimento() {
  	let conhecimento = this.campoConhecimento.nativeElement.value;

  	this.addService.postJSON(conhecimento)
       .subscribe(
          data => this.tempData = data,
          error => {
          	this.conhecimentoInvalido = true;
          	//console.log(error)
          },
          () => {
          	//console.log(this.tempData);
          	this.togleAddConhecimento();
          	this.principal();
          	this.campoConhecimento.nativeElement.value = "";
          }
       );
  }

  delConhecimento(conhecimento) {
  	this.delService.postJSON(conhecimento)
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

  togleAddConhecimento() {
  	if(this.exibirAdicionarConhecimento){
  		this.exibirAdicionarConhecimento = false;
  		this.conhecimentoInvalido = false;
  	}else{
  		this.exibirAdicionarConhecimento = true;
  	}
  }

  digitando() {
  	this.conhecimentoInvalido = false;
  }

}
