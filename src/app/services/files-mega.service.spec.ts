import { TestBed } from '@angular/core/testing';

import { FilesMegaService } from './files-mega.service';

describe('FilesMegaService', () => {
  let service: FilesMegaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilesMegaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
