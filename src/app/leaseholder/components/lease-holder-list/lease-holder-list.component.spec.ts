import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseHolderListComponent } from './lease-holder-list.component';

describe('LeaseHolderListComponent', () => {
  let component: LeaseHolderListComponent;
  let fixture: ComponentFixture<LeaseHolderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseHolderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseHolderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
