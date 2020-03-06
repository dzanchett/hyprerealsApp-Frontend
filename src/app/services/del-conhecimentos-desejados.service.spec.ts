import { TestBed } from '@angular/core/testing';

import { DelConhecimentosDesejadosService } from './del-conhecimentos-desejados.service';

describe('DelConhecimentosDesejadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelConhecimentosDesejadosService = TestBed.get(DelConhecimentosDesejadosService);
    expect(service).toBeTruthy();
  });
});
