import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TutorRegistrationComponent } from './tutor-registration/tutor-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TutorRefistrationComponent } from './tutor-refistration/tutor-refistration.component';
@NgModule({
  declarations: [
    AppComponent,
    TutorRegistrationComponent,
    StudentRegistrationComponent,
    TutorRefistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
