import { TestBed } from '@angular/core/testing';

import { PhotolibrayService } from './photolibray.service';

describe('PhotolibrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotolibrayService = TestBed.get(PhotolibrayService);
    expect(service).toBeTruthy();
  });
});
