import { TestBed } from '@angular/core/testing';

import { AdminGuard.TsGuard } from './admin-guard.ts.guard';

describe('AdminGuard.TsGuard', () => {
  let guard: AdminGuard.TsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuard.TsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
