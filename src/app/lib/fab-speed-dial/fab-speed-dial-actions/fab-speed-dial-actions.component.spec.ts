import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSpeedDialActionsComponent } from './fab-speed-dial-actions.component';

describe('FabSpeedDialActionsComponent', () => {
  let component: FabSpeedDialActionsComponent;
  let fixture: ComponentFixture<FabSpeedDialActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSpeedDialActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpeedDialActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
