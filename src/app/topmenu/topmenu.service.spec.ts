import { TestBed } from '@angular/core/testing';

import { TopmenuService } from './topmenu.service';

describe('TopmenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopmenuService = TestBed.get(TopmenuService);
    expect(service).toBeTruthy();
  });
});
