import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymRequestComponent } from './gym-request.component';

describe('GymRequestComponent', () => {
  let component: GymRequestComponent;
  let fixture: ComponentFixture<GymRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
