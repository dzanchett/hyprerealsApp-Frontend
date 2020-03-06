import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { Globals } from './services/global.service';
import { LivrosComponent } from './pages/livros/livros.component';
import { ConhecimentosComponent } from './pages/conhecimentos/conhecimentos.component';
import { ChatComponent } from './pages/chat/chat.component';
import { MeusLivrosComponent } from './pages/meus-livros/meus-livros.component';
import { LivrosDesejadosComponent } from './pages/livros-desejados/livros-desejados.component';
import { MeusConhecimentosComponent } from './pages/meus-conhecimentos/meus-conhecimentos.component';
import { ConhecimentosDesejadosComponent } from './pages/conhecimentos-desejados/conhecimentos-desejados.component';
import { SobreNosComponent } from './pages/sobre-nos/sobre-nos.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    FooterComponent,
    PaginaInicialComponent,
    CadastroComponent,
    LoginComponent,
    LivrosComponent,
    ConhecimentosComponent,
    ChatComponent,
    MeusLivrosComponent,
    LivrosDesejadosComponent,
    MeusConhecimentosComponent,
    ConhecimentosDesejadosComponent,
    SobreNosComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpModule
  ],
  providers: [
  	Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
