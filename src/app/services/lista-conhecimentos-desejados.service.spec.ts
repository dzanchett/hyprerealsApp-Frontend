import { TestBed } from '@angular/core/testing';

import { ListaConhecimentosDesejadosService } from './lista-conhecimentos-desejados.service';

describe('ListaConhecimentosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaConhecimentosDesejadosService = TestBed.get(ListaConhecimentosDesejadosService);
    expect(service).toBeTruthy();
  });
});
