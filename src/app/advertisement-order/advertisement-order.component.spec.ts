import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementOrderComponent } from './advertisement-order.component';

describe('AdvertisementOrderComponent', () => {
  let component: AdvertisementOrderComponent;
  let fixture: ComponentFixture<AdvertisementOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
