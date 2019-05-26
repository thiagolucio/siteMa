import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSistemaComponent } from './modal-sistema.component';

describe('ModalSistemaComponent', () => {
  let component: ModalSistemaComponent;
  let fixture: ComponentFixture<ModalSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
