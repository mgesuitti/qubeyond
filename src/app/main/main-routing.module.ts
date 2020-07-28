import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'planets',
        loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule),
      },
      {
        path: 'films',
        loadChildren: () => import('./films/films.module').then(m => m.FilmsModule),
      },
      {
        path: 'species',
        loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule),
      },
      {
        path: 'vehicles',
        loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
      },
      {
        path: 'starships',
        loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule),
      },
      {
        path: 'people',
        loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
      },
      { path: '', 
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
