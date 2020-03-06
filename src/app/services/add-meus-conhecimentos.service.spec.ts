import { TestBed } from '@angular/core/testing';

import { AddMeusConhecimentosService } from './add-meus-conhecimentos.service';

describe('AddMeusConhecimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMeusConhecimentosService = TestBed.get(AddMeusConhecimentosService);
    expect(service).toBeTruthy();
  });
});
