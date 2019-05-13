import { TestBed } from '@angular/core/testing';

import { AterrosSanitariosService } from './aterros-sanitarios.service';

describe('AterrosSanitariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AterrosSanitariosService = TestBed.get(AterrosSanitariosService);
    expect(service).toBeTruthy();
  });
});
