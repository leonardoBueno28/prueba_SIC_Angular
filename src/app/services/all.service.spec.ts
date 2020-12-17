/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllService } from './all.service';

describe('Service: All', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllService]
    });
  });

  it('should ...', inject([AllService], (service: AllService) => {
    expect(service).toBeTruthy();
  }));
});
