import { TestBed } from '@angular/core/testing';

import { ObjetosExtraviadosService } from './objetos-extraviados.service';

describe('ObjetosExtraviadosService', () => {
  let service: ObjetosExtraviadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetosExtraviadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
