import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemSomosContentComponent } from './quem-somos-content.component';

describe('QuemSomosContentComponent', () => {
  let component: QuemSomosContentComponent;
  let fixture: ComponentFixture<QuemSomosContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuemSomosContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuemSomosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
