import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfiyComponent } from './verfiy.component';

describe('VerfiyComponent', () => {
  let component: VerfiyComponent;
  let fixture: ComponentFixture<VerfiyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerfiyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerfiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
