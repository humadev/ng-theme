import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarMenuItemComponent } from './main-toolbar-menu-item.component';

describe('MainToolbarMenuItemComponent', () => {
  let component: MainToolbarMenuItemComponent;
  let fixture: ComponentFixture<MainToolbarMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
