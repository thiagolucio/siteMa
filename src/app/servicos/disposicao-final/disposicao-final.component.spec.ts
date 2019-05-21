import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisposicaoFinalComponent } from './disposicao-final.component';

describe('DisposicaoFinalComponent', () => {
  let component: DisposicaoFinalComponent;
  let fixture: ComponentFixture<DisposicaoFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisposicaoFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisposicaoFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
