import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHolidayComponent } from './my-holiday.component';

describe('MyHolidayComponent', () => {
  let component: MyHolidayComponent;
  let fixture: ComponentFixture<MyHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHolidayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
