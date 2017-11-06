import { TestBed, inject } from '@angular/core/testing';

import { ChangeColorService } from './change-color.service';

describe('ChangeColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeColorService]
    });
  });

  it('should be created', inject([ChangeColorService], (service: ChangeColorService) => {
    expect(service).toBeTruthy();
  }));
});
