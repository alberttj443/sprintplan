import { TestBed } from '@angular/core/testing';

import { StorymanageService } from './storymanage.service';

describe('StorymanageService', () => {
  let service: StorymanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorymanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
