import { TestBed } from '@angular/core/testing';

import { ObjetosEncontradosService } from './objetos-encontrados.service';

describe('ObjetosEncontradosService', () => {
  let service: ObjetosEncontradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjetosEncontradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
