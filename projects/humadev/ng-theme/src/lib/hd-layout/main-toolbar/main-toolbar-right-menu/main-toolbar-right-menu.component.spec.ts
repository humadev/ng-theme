import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarRightMenuComponent } from './main-toolbar-right-menu.component';

describe('MainToolbarRightMenuComponent', () => {
  let component: MainToolbarRightMenuComponent;
  let fixture: ComponentFixture<MainToolbarRightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarRightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarRightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
