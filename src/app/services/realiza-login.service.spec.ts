import { TestBed } from '@angular/core/testing';

import { RealizaLoginService } from './realiza-login.service';

describe('RealizaLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealizaLoginService = TestBed.get(RealizaLoginService);
    expect(service).toBeTruthy();
  });
});
