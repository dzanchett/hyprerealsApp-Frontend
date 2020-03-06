import { TestBed } from '@angular/core/testing';

import { ListaMensagensService } from './lista-mensagens.service';

describe('ListaMensagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaMensagensService = TestBed.get(ListaMensagensService);
    expect(service).toBeTruthy();
  });
});
