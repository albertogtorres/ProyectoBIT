import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { CatalogoComponent } from 'src/app/components/catalogo/catalogo.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'catalogo', component: CatalogoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
