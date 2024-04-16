import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetosEncontradosComponent } from './objetos-encontrados.component';

describe('ObjetosEncontradosComponent', () => {
  let component: ObjetosEncontradosComponent;
  let fixture: ComponentFixture<ObjetosEncontradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjetosEncontradosComponent]
    });
    fixture = TestBed.createComponent(ObjetosEncontradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
