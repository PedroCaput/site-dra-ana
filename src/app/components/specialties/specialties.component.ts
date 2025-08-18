import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import specialtiesData from 'src/app/especialidades.json';

interface Specialty {
  titulo: string;
  ['termo-explicativo']: string;
  descricao: string;
}

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent implements OnInit{
  specialties: Specialty[] = [];

  ngOnInit(): void {
      this.specialties = specialtiesData;
  }
}
