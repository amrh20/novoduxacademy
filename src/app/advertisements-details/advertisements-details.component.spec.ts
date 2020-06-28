import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementsDetailsComponent } from './advertisements-details.component';

describe('AdvertisementsDetailsComponent', () => {
  let component: AdvertisementsDetailsComponent;
  let fixture: ComponentFixture<AdvertisementsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
