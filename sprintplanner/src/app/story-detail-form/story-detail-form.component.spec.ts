import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailFormComponent } from './story-detail-form.component';

describe('StoryDetailFormComponent', () => {
  let component: StoryDetailFormComponent;
  let fixture: ComponentFixture<StoryDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoryDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
