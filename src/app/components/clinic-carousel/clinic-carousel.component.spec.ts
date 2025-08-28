import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicCarouselComponent } from './clinic-carousel.component';

describe('ClinicCarouselComponent', () => {
  let component: ClinicCarouselComponent;
  let fixture: ComponentFixture<ClinicCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClinicCarouselComponent]
    });
    fixture = TestBed.createComponent(ClinicCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
