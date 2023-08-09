import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISectionComponent } from './isection.component';

describe('ISectionComponent', () => {
  let component: ISectionComponent;
  let fixture: ComponentFixture<ISectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ISectionComponent]
    });
    fixture = TestBed.createComponent(ISectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
