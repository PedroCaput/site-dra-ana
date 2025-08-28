import { Component } from '@angular/core';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { SpecialtiesComponent } from 'src/app/components/specialties/specialties.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { LocationComponent } from 'src/app/components/location/location.component';
import { ClinicCarouselComponent } from 'src/app/components/clinic-carousel/clinic-carousel.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [
    BannerComponent,
    SpecialtiesComponent,
    AboutComponent,
    LocationComponent,
    ClinicCarouselComponent
  ]
})
export class HomePageComponent {}
