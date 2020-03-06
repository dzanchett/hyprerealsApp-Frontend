import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListaConhecimentosDesejadosService } from '../../services/lista-conhecimentos-desejados.service'
import { AddConhecimentosDesejadosService } from '../../services/add-conhecimentos-desejados.service'
import { DelConhecimentosDesejadosService } from '../../services/del-conhecimentos-desejados.service'
import { Globals } from '../../services/global.service'

@Component({
  selector: 'app-conhecimentos-desejados',
  templateUrl: './conhecimentos-desejados.component.html',
  styleUrls: ['./conhecimentos-desejados.component.scss']
})
export class ConhecimentosDesejadosComponent implements OnInit {

  @ViewChild('campoConhecimento', {static: false}) campoConhecimento:ElementRef;

	globals: Globals;
	postData = [];
	tempData = null;
	exibirAdicionarConhecimento = false;
	conhecimentoInvalido = false;

  constructor(
  	private httpService : ListaConhecimentosDesejadosService,
  	private addService : AddConhecimentosDesejadosService,
  	private delService : DelConhecimentosDesejadosService,
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
