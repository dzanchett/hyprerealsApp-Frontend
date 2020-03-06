import { TestBed } from '@angular/core/testing';

import { ListaMeusConhecimentosService } from './lista-meus-conhecimentos.service';

describe('ListaMeusConhecimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaMeusConhecimentosService = TestBed.get(ListaMeusConhecimentosService);
    expect(service).toBeTruthy();
  });
});
