import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant-hors-paris',
  templateUrl: './etudiant-hors-paris.component.html',
  styleUrls: ['./etudiant-hors-paris.component.css']
})
export class EtudiantHorsParisComponent implements OnInit{
  tabEtud!: Etudiant[];

  constructor(private etudiantService: EtudiantService) {}
  
  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }

}
