import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { SpecialtiesComponent } from "./components/specialties/specialties.component";
import { AboutComponent } from "./components/about/about.component";
import { LocationComponent } from "./components/location/location.component";
import { ClinicCarouselComponent } from "./components/clinic-carousel/clinic-carousel.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, BannerComponent, SpecialtiesComponent, AboutComponent, LocationComponent, ClinicCarouselComponent]
})
export class AppComponent {

}