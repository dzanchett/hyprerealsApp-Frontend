import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  meusLivrosShow: boolean;

  constructor() {
  	this.meusLivrosShow = true;
  }

  ngOnInit() {
  }

  showMeusLivros() {
  	this.meusLivrosShow = true;
  }

  showLivrosDesejados() {
  	this.meusLivrosShow = false;
  }

}
