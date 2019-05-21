import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcaoResiduosComponent } from './recepcao-residuos.component';

describe('RecepcaoResiduosComponent', () => {
  let component: RecepcaoResiduosComponent;
  let fixture: ComponentFixture<RecepcaoResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepcaoResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepcaoResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
