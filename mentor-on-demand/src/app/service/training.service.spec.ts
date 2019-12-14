import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, NgModelGroup, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TrainingService } from './training.service';

describe('TrainingService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule,FormsModule]
  }));

  it('should be created', () => {
    const service: TrainingService = TestBed.get(TrainingService);
    expect(service).toBeTruthy();
  });
});
