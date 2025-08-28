import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  safeMapUrl!: SafeResourceUrl;

  constructor ( private sanitizer: DomSanitizer ) {}

  ngOnInit(){
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6109501386486!2d-49.2695315!3d-16.6963409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef176ac462a9d%3A0x6d223c629d72414f!2sBela%20Inf%C3%A2ncia%20Cl%C3%ADnica%20Pedi%C3%A1trica!5e0!3m2!1spt-BR!2sbr!4v1753470756753!5m2!1spt-BR!2sbr'
    );
  }
}
