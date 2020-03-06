import { TestBed } from '@angular/core/testing';

import { DelMeusLivrosService } from './del-meus-livros.service';

describe('DelMeusLivrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DelMeusLivrosService = TestBed.get(DelMeusLivrosService);
    expect(service).toBeTruthy();
  });
});
