import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit{
  tabEtud!: Etudiant[];

  constructor(private etudiantService: EtudiantService) {}
  
  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }
}
