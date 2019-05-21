import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiduoIndustrialComponent } from './residuo-industrial.component';

describe('ResiduoIndustrialComponent', () => {
  let component: ResiduoIndustrialComponent;
  let fixture: ComponentFixture<ResiduoIndustrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiduoIndustrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiduoIndustrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
