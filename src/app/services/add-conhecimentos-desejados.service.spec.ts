import { TestBed } from '@angular/core/testing';

import { AddConhecimentosDesejadosService } from './add-conhecimentos-desejados.service';

describe('AddConhecimentosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddConhecimentosDesejadosService = TestBed.get(AddConhecimentosDesejadosService);
    expect(service).toBeTruthy();
  });
});
