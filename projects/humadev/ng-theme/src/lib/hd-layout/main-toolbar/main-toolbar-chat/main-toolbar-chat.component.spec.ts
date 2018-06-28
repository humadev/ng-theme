import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainToolbarChatComponent } from './main-toolbar-chat.component';

describe('MainToolbarChatComponent', () => {
  let component: MainToolbarChatComponent;
  let fixture: ComponentFixture<MainToolbarChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainToolbarChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainToolbarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
