import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncineracaoComponent } from './incineracao.component';

describe('IncineracaoComponent', () => {
  let component: IncineracaoComponent;
  let fixture: ComponentFixture<IncineracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncineracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncineracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
