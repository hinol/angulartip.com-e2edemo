import { TestBed, inject } from '@angular/core/testing';

import { FetchCarService } from './fetch-car.service';
import {HttpClient} from '@angular/common/http';

describe('FetchCarService', () => {
    class HttpClientMock{

    }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchCarService, {provide: HttpClient, useClass: HttpClientMock},]
    });
  });

  it('should be created', inject([FetchCarService], (service: FetchCarService) => {
    expect(service).toBeTruthy();
  }));
});
