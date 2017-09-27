import { TestBed, inject } from '@angular/core/testing';

import { CatalogService } from './catalog.service';
import { HttpModule } from '@angular/http';

describe('CatalogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CatalogService], (service: CatalogService) => {
    expect(service).toBeTruthy();
  }));
});
