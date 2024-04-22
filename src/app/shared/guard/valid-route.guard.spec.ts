import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validRouteGuard } from './valid-route.guard';

describe('validRouteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
