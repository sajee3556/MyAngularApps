import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';

const routes: Routes = [
  {path : '', component : PersonComponent},
  {path : 'input', component: PersonInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
