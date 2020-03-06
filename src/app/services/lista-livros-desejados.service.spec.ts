import { TestBed } from '@angular/core/testing';

import { ListaLivrosDesejadosService } from './lista-livros-desejados.service';

describe('ListaLivrosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaLivrosDesejadosService = TestBed.get(ListaLivrosDesejadosService);
    expect(service).toBeTruthy();
  });
});
