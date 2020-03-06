import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { ConhecimentosComponent } from './pages/conhecimentos/conhecimentos.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';

const routes: Routes = [
	{path: '', component: PaginaInicialComponent},
	{path: 'cadastro', component: CadastroComponent},
	{path: 'login', component: LoginComponent},
	{path: 'livros', component: LivrosComponent},
	{path: 'conhecimentos', component: ConhecimentosComponent},
	{path: 'chat', component: ChatComponent},
	{path: 'aboutus', component: SobreNosComponent},
	{path: '**', component: PaginaInicialComponent}
];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes)
 	],
  exports: [
  	RouterModule
  	]
})
export class AppRoutingModule { }
