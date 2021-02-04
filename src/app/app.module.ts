import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ListallComponent } from './listall/listall.component';
import { SettingsComponent } from './settings/settings.component';
import { PredictComponent } from './predict/predict.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddnewComponent } from './addnew/addnew.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListallComponent,
    SettingsComponent,
    PredictComponent,
    WelcomeComponent,
    AddnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
