import { Component, OnInit } from '@angular/core';
import { SpecService } from 'src/app/services/spec.service';
import { Specialite } from 'src/app/models/specialite';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit{
  tabSpec!: Specialite[];

  constructor(private specService: SpecService) {};

  ngOnInit(): void {
    this.tabSpec = this.specService.tabSpec;
  }

}
