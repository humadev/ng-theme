import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarProfileComponent } from './main-toolbar-profile.component';

describe('MainToolbarProfileComponent', () => {
  let component: MainToolbarProfileComponent;
  let fixture: ComponentFixture<MainToolbarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
