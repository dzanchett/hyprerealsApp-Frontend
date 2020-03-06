import { TestBed } from '@angular/core/testing';

import { ListaMeusLivrosService } from './lista-meus-livros.service';

describe('ListaMeusLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaMeusLivrosService = TestBed.get(ListaMeusLivrosService);
    expect(service).toBeTruthy();
  });
});
