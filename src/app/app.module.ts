import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ModelFormComponent } from './model-form/model-form.component';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
