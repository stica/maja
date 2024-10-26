import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InitialComponent } from "./modules/initial/initial/initial.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: InitialComponent
  },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }