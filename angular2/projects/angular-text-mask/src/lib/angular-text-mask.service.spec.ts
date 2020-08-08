import { TestBed } from '@angular/core/testing';

import { AngularTextMaskService } from './angular-text-mask.service';

describe('AngularTextMaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularTextMaskService = TestBed.get(AngularTextMaskService);
    expect(service).toBeTruthy();
  });
});
