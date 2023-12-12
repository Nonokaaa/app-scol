import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrls: ['./etudiant-paris.component.css']
})
export class EtudiantParisComponent implements OnInit{
  tabEtud!: Etudiant[];

  constructor(private etudiantService: EtudiantService) {}
  
  ngOnInit(): void {
    this.tabEtud = this.etudiantService.tabEtud;
  }
}
