import { TestBed } from '@angular/core/testing';

import { DelLivrosDesejadosService } from './del-livros-desejados.service';

describe('DelLivrosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelLivrosDesejadosService = TestBed.get(DelLivrosDesejadosService);
    expect(service).toBeTruthy();
  });
});
