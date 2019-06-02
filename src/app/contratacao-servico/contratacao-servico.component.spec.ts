import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratacaoServicoComponent } from './contratacao-servico.component';

describe('ContratacaoServicoComponent', () => {
  let component: ContratacaoServicoComponent;
  let fixture: ComponentFixture<ContratacaoServicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContratacaoServicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratacaoServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
