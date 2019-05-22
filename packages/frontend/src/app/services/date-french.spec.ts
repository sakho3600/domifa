import { inject, TestBed } from '@angular/core/testing';
import { CustomDatepickerI18n } from './date-french';

describe('CustomDatepickerI18n', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomDatepickerI18n]
    });
  });

  it('should be created', inject([CustomDatepickerI18n], (service: CustomDatepickerI18n) => {
    expect(service).toBeTruthy();
  }));
});
