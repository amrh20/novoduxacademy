import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendCoursesComponent } from './recommend-courses.component';

describe('RecommendCoursesComponent', () => {
  let component: RecommendCoursesComponent;
  let fixture: ComponentFixture<RecommendCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
