import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextMenuPanelComponent } from './context-menu-panel.component';

describe('ContextMenuPanelComponent', () => {
    let component: ContextMenuPanelComponent;
    let fixture: ComponentFixture<ContextMenuPanelComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ContextMenuPanelComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContextMenuPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});