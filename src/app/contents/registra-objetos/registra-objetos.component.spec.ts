import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraObjetosComponent } from './registra-objetos.component';

describe('RegistraObjetosComponent', () => {
  let component: RegistraObjetosComponent;
  let fixture: ComponentFixture<RegistraObjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistraObjetosComponent]
    });
    fixture = TestBed.createComponent(RegistraObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
