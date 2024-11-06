import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreObjetosComponent } from './padre-objetos.component';

describe('PadreObjetosComponent', () => {
  let component: PadreObjetosComponent;
  let fixture: ComponentFixture<PadreObjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreObjetosComponent]
    });
    fixture = TestBed.createComponent(PadreObjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
