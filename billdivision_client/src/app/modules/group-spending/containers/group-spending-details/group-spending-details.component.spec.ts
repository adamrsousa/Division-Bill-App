import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpendingDetailsComponent } from './group-spending-details.component';

describe('GroupSpendingDetailsComponent', () => {
  let component: GroupSpendingDetailsComponent;
  let fixture: ComponentFixture<GroupSpendingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpendingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpendingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
