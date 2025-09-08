import { TestBed } from '@angular/core/testing';

import { BlogSettingsService } from './services/blog-settings.service';

describe('BlogSettingsService', () => {
  let service: BlogSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
