import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WSectionComponent } from './wsection.component';

describe('WSectionComponent', () => {
  let component: WSectionComponent;
  let fixture: ComponentFixture<WSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WSectionComponent]
    });
    fixture = TestBed.createComponent(WSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
