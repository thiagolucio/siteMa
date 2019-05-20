import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentServicosComponent } from './content-servicos.component';

describe('ContentServicosComponent', () => {
  let component: ContentServicosComponent;
  let fixture: ComponentFixture<ContentServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
