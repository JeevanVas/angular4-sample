import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataTdfComponent } from './user-data-tdf.component';

describe('UserDataTdfComponent', () => {
  let component: UserDataTdfComponent;
  let fixture: ComponentFixture<UserDataTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
