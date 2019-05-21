import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuidadosAdicionaisComponent } from './cuidados-adicionais.component';

describe('CuidadosAdicionaisComponent', () => {
  let component: CuidadosAdicionaisComponent;
  let fixture: ComponentFixture<CuidadosAdicionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuidadosAdicionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadosAdicionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
