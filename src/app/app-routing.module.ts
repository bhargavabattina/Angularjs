import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayFormComponent } from './pay-form/pay-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'init', pathMatch: 'full'},
  { path: 'init', component: PayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
