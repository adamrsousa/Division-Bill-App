import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpendingCreateComponent } from './group-spending-create.component';

describe('GroupSpendingCreateComponent', () => {
  let component: GroupSpendingCreateComponent;
  let fixture: ComponentFixture<GroupSpendingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpendingCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpendingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
