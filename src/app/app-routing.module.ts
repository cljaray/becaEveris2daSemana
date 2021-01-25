import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { Vista2Component } from 'src/app/components/componentesVista/vista2/vista2.component';
import { Vista3Component } from 'src/app/components/componentesVista/vista3/vista3.component';
import { Vista4Component } from 'src/app/components/componentesVista/vista4/vista4.component';

const routes: Routes = [
  { path:"", component: LoginComponent},
  { path:"vista2", component: Vista2Component},
  { path:"vista3", component: Vista3Component},
  { path:"vista4", component: Vista4Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
