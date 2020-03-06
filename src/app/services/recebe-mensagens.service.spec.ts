import { TestBed } from '@angular/core/testing';

import { RecebeMensagensService } from './recebe-mensagens.service';

describe('RecebeMensagensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecebeMensagensService = TestBed.get(RecebeMensagensService);
    expect(service).toBeTruthy();
  });
});
