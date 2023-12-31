import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsParisComponent } from './components/etudiant-hors-paris/etudiant-hors-paris.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent},
  { path: 'specialite', component: SpecialiteComponent},
  { path: 'paris', component: EtudiantParisComponent},
  { path: 'horsparis', component: EtudiantHorsParisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
