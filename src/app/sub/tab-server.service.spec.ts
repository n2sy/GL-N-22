import { TestBed } from '@angular/core/testing';

import { TabServerService } from './tab-server.service';

describe('TabServerService', () => {
  let service: TabServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
