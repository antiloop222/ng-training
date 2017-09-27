import { TestBed, async, inject } from '@angular/core/testing';

import { PaymentGuard } from './payment.guard';
import { AuthService } from './auth.service';

describe('PaymentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentGuard,AuthService]
    });
  });

  it('should ...', inject([PaymentGuard], (guard: PaymentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
