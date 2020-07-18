import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCourseComponent } from './success-course.component';

describe('SuccessCourseComponent', () => {
  let component: SuccessCourseComponent;
  let fixture: ComponentFixture<SuccessCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
