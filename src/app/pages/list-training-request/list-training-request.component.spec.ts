import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrainingRequestComponent } from './list-training-request.component';

describe('ListTrainingRequestComponent', () => {
  let component: ListTrainingRequestComponent;
  let fixture: ComponentFixture<ListTrainingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrainingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTrainingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
