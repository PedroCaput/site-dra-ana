import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  scrollForElement(id: string) {
    const element = document.getElementById(id);

    if(element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  goToBanner() {
    this.scrollForElement('banner');
  }

  goToEspecialidades() {
    this.scrollForElement('especialidades');
  }

  goToSobre() {
    this.scrollForElement('sobre');
  }

  goToLocalizacao() {
    this.scrollForElement('localizacao');
  }

  constructor(private router: Router) {}

  backToHome() {
    this.router.navigate(['']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToCarshop() {
    this.router.navigate(['/carrinho']);
  }

  goToAbout() {
    this.router.navigate(['/sobre']);
  }

  goToContact() {
    this.router.navigate(['/contato']);
  }

  goToTerms() {
    this.router.navigate(['/termos']);
  }
}
