import { TestBed } from '@angular/core/testing';

import { RealizaCadastroService } from './realiza-cadastro.service';

describe('RealizaCadastroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealizaCadastroService = TestBed.get(RealizaCadastroService);
    expect(service).toBeTruthy();
  });
});
