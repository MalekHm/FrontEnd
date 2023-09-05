import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayTrainingComponent } from './may-training.component';

describe('MayTrainingComponent', () => {
  let component: MayTrainingComponent;
  let fixture: ComponentFixture<MayTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MayTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MayTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
