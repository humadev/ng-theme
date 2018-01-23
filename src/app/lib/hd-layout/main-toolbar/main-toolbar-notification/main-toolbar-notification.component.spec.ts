import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarNotificationComponent } from './main-toolbar-notification.component';

describe('MainToolbarNotificationComponent', () => {
  let component: MainToolbarNotificationComponent;
  let fixture: ComponentFixture<MainToolbarNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
