import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OClientsComponent } from './oclients.component';

describe('OClientsComponent', () => {
  let component: OClientsComponent;
  let fixture: ComponentFixture<OClientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OClientsComponent]
    });
    fixture = TestBed.createComponent(OClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
