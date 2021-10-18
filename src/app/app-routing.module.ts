import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { UserFormComponent } from './user-form/user-form.component';
const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"input-output",component:OutputComponent},
  {path:"register-user-form",component:UserFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InputComponent, OutputComponent,HomeComponent]
