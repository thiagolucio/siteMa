import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlendagemResiduosComponent } from './blendagem-residuos.component';

describe('BlendagemResiduosComponent', () => {
  let component: BlendagemResiduosComponent;
  let fixture: ComponentFixture<BlendagemResiduosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlendagemResiduosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlendagemResiduosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
