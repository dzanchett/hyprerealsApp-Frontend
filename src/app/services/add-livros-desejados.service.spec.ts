import { TestBed } from '@angular/core/testing';

import { AddLivrosDesejadosService } from './add-livros-desejados.service';

describe('AddLivrosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddLivrosDesejadosService = TestBed.get(AddLivrosDesejadosService);
    expect(service).toBeTruthy();
  });
});
