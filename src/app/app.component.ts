import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { SpecialtiesComponent } from "./components/specialties/specialties.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { LocalizacaoComponent } from "./components/localizacao/localizacao.component";

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, BannerComponent, SpecialtiesComponent, SobreComponent, LocalizacaoComponent]
})
export class AppComponent {

}