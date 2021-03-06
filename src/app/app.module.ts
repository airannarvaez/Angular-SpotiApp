import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { routings } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routings
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
