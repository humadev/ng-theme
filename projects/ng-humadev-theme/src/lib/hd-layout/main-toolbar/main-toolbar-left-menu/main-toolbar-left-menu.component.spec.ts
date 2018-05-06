import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarLeftMenuComponent } from './main-toolbar-left-menu.component';

describe('MainToolbarLeftMenuComponent', () => {
  let component: MainToolbarLeftMenuComponent;
  let fixture: ComponentFixture<MainToolbarLeftMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarLeftMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarLeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
