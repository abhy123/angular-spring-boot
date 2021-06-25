import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeProfileComponent } from './add-employee-profile.component';

describe('AddEmployeeProfileComponent', () => {
  let component: AddEmployeeProfileComponent;
  let fixture: ComponentFixture<AddEmployeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
