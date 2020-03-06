import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conhecimentos',
  templateUrl: './conhecimentos.component.html',
  styleUrls: ['./conhecimentos.component.scss']
})
export class ConhecimentosComponent implements OnInit {

  meusConhecimentosShow: boolean;

  constructor() {
  	this.meusConhecimentosShow = true;
  }

  ngOnInit() {
  }

  showMeusConhecimentos() {
  	this.meusConhecimentosShow = true;
  }

  showConhecimentosDesejados() {
  	this.meusConhecimentosShow = false;
  }

}
