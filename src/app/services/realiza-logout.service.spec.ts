import { TestBed } from '@angular/core/testing';

import { RealizaLogoutService } from './realiza-logout.service';

describe('RealizaLogoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealizaLogoutService = TestBed.get(RealizaLogoutService);
    expect(service).toBeTruthy();
  });
});
