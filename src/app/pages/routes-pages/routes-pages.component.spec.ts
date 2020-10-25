import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesPagesComponent } from './routes-pages.component';

describe('RoutesPagesComponent', () => {
  let component: RoutesPagesComponent;
  let fixture: ComponentFixture<RoutesPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
