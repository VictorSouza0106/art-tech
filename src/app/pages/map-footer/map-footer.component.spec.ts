import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFooterComponent } from './map-footer.component';

describe('MapFooterComponent', () => {
  let component: MapFooterComponent;
  let fixture: ComponentFixture<MapFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
