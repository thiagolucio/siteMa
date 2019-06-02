import { TestBed } from '@angular/core/testing';

import { ModalLabsService } from './modal-labs.service';

describe('ModalLabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalLabsService = TestBed.get(ModalLabsService);
    expect(service).toBeTruthy();
  });
});
