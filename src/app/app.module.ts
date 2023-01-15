import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatDialogModule} from '@angular/material/dialog';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSliderModule} from '@angular/material/slider';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatListModule} from '@angular/material/list';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { HoverStyleDirective } from './directives/hover-style.directive';
import { RequiredInfoDirective } from './directives/required-info.directive';
import { PokemonListComponent } from './pages/pokemon-list/pokemon-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

      



@NgModule({
  declarations: [
  
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    CurriculumVitaeComponent,
    HoverStyleDirective,
    RequiredInfoDirective,
    FormularioComponent,
    PokemonListComponent,
    PokemonCardComponent
    
    
   
    
    
    
  
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
