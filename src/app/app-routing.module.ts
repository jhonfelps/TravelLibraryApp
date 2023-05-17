import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { librosComponent } from './libros/libros.component';
import { DetalleComponent } from './libros/detalle/detalle.component';

const routes: Routes = [
  {path: '', redirectTo: '/libros', pathMatch: 'full'},
  {path: 'libros', component: librosComponent},
  {path: 'libros/page/:page', component: librosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
