import { TestBed } from '@angular/core/testing';

import { EleicaoService } from './eleicao.service';

describe('EleicaoService', () => {
  let service: EleicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EleicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
