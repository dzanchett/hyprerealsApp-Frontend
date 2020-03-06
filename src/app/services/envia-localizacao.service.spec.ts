import { TestBed } from '@angular/core/testing';

import { EnviaLocalizacaoService } from './envia-localizacao.service';

describe('EnviaLocalizacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviaLocalizacaoService = TestBed.get(EnviaLocalizacaoService);
    expect(service).toBeTruthy();
  });
});
