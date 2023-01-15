import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonListComponent} from './pages/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent  },
  {path: 'formulario', component: FormularioComponent  },
  {path: 'cv', component: CurriculumVitaeComponent },
  {path: 'pokemons', component: PokemonListComponent},
  {path: '**',  pathMatch:'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
