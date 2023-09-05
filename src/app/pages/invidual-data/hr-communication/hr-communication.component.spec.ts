import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCommunicationComponent } from './hr-communication.component';

describe('HrCommunicationComponent', () => {
  let component: HrCommunicationComponent;
  let fixture: ComponentFixture<HrCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
