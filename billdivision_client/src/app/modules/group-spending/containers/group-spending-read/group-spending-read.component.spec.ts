import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSpendingReadComponent } from './group-spending-read.component';

describe('GroupSpendingReadComponent', () => {
  let component: GroupSpendingReadComponent;
  let fixture: ComponentFixture<GroupSpendingReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSpendingReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSpendingReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
