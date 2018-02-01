import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataMdfComponent } from './user-data-mdf.component';

describe('UserDataMdfComponent', () => {
  let component: UserDataMdfComponent;
  let fixture: ComponentFixture<UserDataMdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataMdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataMdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
