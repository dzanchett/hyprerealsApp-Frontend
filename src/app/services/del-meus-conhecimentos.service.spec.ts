import { TestBed } from '@angular/core/testing';

import { DelMeusConhecimentosService } from './del-meus-conhecimentos.service';

describe('DelMeusConhecimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelMeusConhecimentosService = TestBed.get(DelMeusConhecimentosService);
    expect(service).toBeTruthy();
  });
});
