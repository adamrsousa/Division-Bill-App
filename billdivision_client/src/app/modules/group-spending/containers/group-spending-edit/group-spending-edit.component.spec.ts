import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpendingEditComponent } from './group-spending-edit.component';

describe('GroupSpendingEditComponent', () => {
  let component: GroupSpendingEditComponent;
  let fixture: ComponentFixture<GroupSpendingEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpendingEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpendingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
