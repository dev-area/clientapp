import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListallComponent } from './listall/listall.component';
import { SettingsComponent } from './settings/settings.component';
import { PredictComponent } from './predict/predict.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddnewComponent } from './addnew/addnew.component';

const routes: Routes = [
  {path:  "", component: WelcomeComponent },
  {path: "list", component: ListallComponent},
  {path: "settings", component: SettingsComponent},
  {path: "predict", component: PredictComponent},
  {path: "addnew" , component: AddnewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
