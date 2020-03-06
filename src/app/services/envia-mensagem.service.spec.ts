import { TestBed } from '@angular/core/testing';

import { EnviaMensagemService } from './envia-mensagem.service';

describe('EnviaMensagemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnviaMensagemService = TestBed.get(EnviaMensagemService);
    expect(service).toBeTruthy();
  });
});
