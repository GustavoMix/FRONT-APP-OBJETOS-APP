import { TestBed } from '@angular/core/testing';

import { RegistraObjetosService } from './registra-objetos.service';

describe('RegistraObjetosService', () => {
  let service: RegistraObjetosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistraObjetosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
