import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabilidadeLegalComponent } from './responsabilidade-legal.component';

describe('ResponsabilidadeLegalComponent', () => {
  let component: ResponsabilidadeLegalComponent;
  let fixture: ComponentFixture<ResponsabilidadeLegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsabilidadeLegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabilidadeLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
