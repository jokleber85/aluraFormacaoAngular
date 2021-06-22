import { TestBed, async, inject } from '@angular/core/testing';
import { TransferenciaService } from './transferenciaService';

describe('Service: Transferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferenciaService]
    });
  });

  it('should ...', inject([TransferenciaService], (service: TransferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
