import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoResiduosComponent } from './tratamento-residuos.component';

describe('TratamentoResiduosComponent', () => {
  let component: TratamentoResiduosComponent;
  let fixture: ComponentFixture<TratamentoResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamentoResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentoResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
