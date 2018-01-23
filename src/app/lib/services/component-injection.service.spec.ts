import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInjectionServiceComponent } from './component-injection.service.component';

describe('ComponentInjectionServiceComponent', () => {
    let component: ComponentInjectionServiceComponent;
    let fixture: ComponentFixture<ComponentInjectionServiceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ComponentInjectionServiceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ComponentInjectionServiceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});