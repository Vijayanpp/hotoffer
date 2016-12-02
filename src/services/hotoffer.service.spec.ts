/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HotofferService } from './hotoffer.service';

describe('Service: Hotoffer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotofferService]
    });
  });

  it('should ...', inject([HotofferService], (service: HotofferService) => {
    expect(service).toBeTruthy();
  }));
});
