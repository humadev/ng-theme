import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarStartShortcutComponent } from './main-toolbar-start-shortcut.component';

describe('MainToolbarStartShortcutComponent', () => {
  let component: MainToolbarStartShortcutComponent;
  let fixture: ComponentFixture<MainToolbarStartShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarStartShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarStartShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
