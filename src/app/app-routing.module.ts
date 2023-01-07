import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    title:"Inicio"
  },
  {
    path: "add",
    component: FormComponent,
    title:"Agregar"
  },
  {
    path: "edit",
    component: EditComponent,
    title:"Editar"
  },
  {
    path: "**",
    component: MainComponent,
    title:"Inicio"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
