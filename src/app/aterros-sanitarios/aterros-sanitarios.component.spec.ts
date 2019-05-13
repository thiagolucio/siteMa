import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AterrosSanitariosComponent } from './aterros-sanitarios.component';

describe('AterrosSanitariosComponent', () => {
  let component: AterrosSanitariosComponent;
  let fixture: ComponentFixture<AterrosSanitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AterrosSanitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AterrosSanitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
