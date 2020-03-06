import { TestBed } from '@angular/core/testing';

import { AddMeusLivrosService } from './add-meus-livros.service';

describe('AddMeusLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddMeusLivrosService = TestBed.get(AddMeusLivrosService);
    expect(service).toBeTruthy();
  });
});
