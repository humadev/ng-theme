import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSeparatorComponent } from './profile-separator.component';

describe('ProfileSeparatorComponent', () => {
  let component: ProfileSeparatorComponent;
  let fixture: ComponentFixture<ProfileSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
