import { TestBed, inject } from '@angular/core/testing';

import { NgHumadevThemeService } from './ng-humadev-theme.service';

describe('NgHumadevThemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgHumadevThemeService]
    });
  });

  it('should be created', inject([NgHumadevThemeService], (service: NgHumadevThemeService) => {
    expect(service).toBeTruthy();
  }));
});
