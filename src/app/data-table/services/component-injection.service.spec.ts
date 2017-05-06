import { TestBed, inject } from '@angular/core/testing';

import { ComponentInjectionService } from './component-injection.service';

describe('ComponentInjectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentInjectionService]
    });
  });

  it('should ...', inject([ComponentInjectionService], (service: ComponentInjectionService) => {
    expect(service).toBeTruthy();
  }));
});
