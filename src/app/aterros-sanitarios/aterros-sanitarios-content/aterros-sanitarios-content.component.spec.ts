import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AterrosSanitariosContentComponent } from './aterros-sanitarios-content.component';

describe('AterrosSanitariosContentComponent', () => {
  let component: AterrosSanitariosContentComponent;
  let fixture: ComponentFixture<AterrosSanitariosContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AterrosSanitariosContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AterrosSanitariosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
