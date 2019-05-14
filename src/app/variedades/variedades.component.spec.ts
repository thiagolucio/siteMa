import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariedadesComponent } from './variedades.component';

describe('VariedadesComponent', () => {
  let component: VariedadesComponent;
  let fixture: ComponentFixture<VariedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
