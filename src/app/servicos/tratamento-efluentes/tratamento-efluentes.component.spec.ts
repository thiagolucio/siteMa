import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamentoEfluentesComponent } from './tratamento-efluentes.component';

describe('TratamentoEfluentesComponent', () => {
  let component: TratamentoEfluentesComponent;
  let fixture: ComponentFixture<TratamentoEfluentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamentoEfluentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamentoEfluentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
