import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvidualDataComponent } from './invidual-data.component';

describe('InvidualDataComponent', () => {
  let component: InvidualDataComponent;
  let fixture: ComponentFixture<InvidualDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvidualDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvidualDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
