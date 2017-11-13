import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabSpeedDialTriggerComponent } from './fab-speed-dial-trigger.component';

describe('FabSpeedDialTriggerComponent', () => {
  let component: FabSpeedDialTriggerComponent;
  let fixture: ComponentFixture<FabSpeedDialTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabSpeedDialTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabSpeedDialTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
