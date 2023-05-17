import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { librosComponent } from './libros/libros.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { libroService } from './libros/libro.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { DetalleComponent } from './libros/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    librosComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [libroService,{ provide: 'DD.MM.YYYY', useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
