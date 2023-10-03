import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInternetSubscriptionComponent } from './my-internet-subscription.component';

describe('MyInternetSubscriptionComponent', () => {
  let component: MyInternetSubscriptionComponent;
  let fixture: ComponentFixture<MyInternetSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyInternetSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInternetSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
