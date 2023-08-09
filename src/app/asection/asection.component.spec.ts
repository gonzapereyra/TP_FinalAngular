import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASectionComponent } from './asection.component';

describe('ASectionComponent', () => {
  let component: ASectionComponent;
  let fixture: ComponentFixture<ASectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ASectionComponent]
    });
    fixture = TestBed.createComponent(ASectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
