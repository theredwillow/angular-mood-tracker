import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafMoodtrackerComponent } from './leaf-moodtracker.component';

describe('LeafMoodtrackerComponent', () => {
  let component: LeafMoodtrackerComponent;
  let fixture: ComponentFixture<LeafMoodtrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafMoodtrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeafMoodtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
