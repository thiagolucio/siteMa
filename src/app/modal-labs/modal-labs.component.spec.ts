import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLabsComponent } from './modal-labs.component';

describe('ModalLabsComponent', () => {
  let component: ModalLabsComponent;
  let fixture: ComponentFixture<ModalLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
