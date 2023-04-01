import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayFormComponent } from './pay-form/pay-form.component';
import { PayResponseComponent } from './pay-response/pay-response.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SabpaisaWrapperComponent } from './SabPaisaWrapper';

@NgModule({
  declarations: [
    AppComponent,
    PayFormComponent,
    PayResponseComponent,
    SabpaisaWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


