import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHumadevThemeComponent } from './ng-humadev-theme.component';

describe('NgHumadevThemeComponent', () => {
  let component: NgHumadevThemeComponent;
  let fixture: ComponentFixture<NgHumadevThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHumadevThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHumadevThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
