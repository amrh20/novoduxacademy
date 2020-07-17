import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStepsComponent } from './search-steps.component';

describe('SearchStepsComponent', () => {
  let component: SearchStepsComponent;
  let fixture: ComponentFixture<SearchStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
