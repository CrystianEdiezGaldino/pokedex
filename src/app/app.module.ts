import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ViewcardComponent } from './viewcard/viewcard.component';
import { CardprofileComponent } from './cardprofile/cardprofile.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexService } from './services/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewcardComponent,
    CardprofileComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [PokedexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
