
import { BrowserModule } from '@angular/platform-browser';

/////bootstrap
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/////icons
//import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
  
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './components/feedback/feedback.component';
import {HttpClientModule}from '@angular/common/http';
import { AddfeedbackComponent } from './components/addfeedback/addfeedback.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PicturesComponent } from './components/pictures/pictures.component';
import { MyPipePipe } from './my-pipe.pipe';
import { PhonenumbervalidatorDirective } from './phonenumbervalidator.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    
    AppComponent,
    HomepageComponent,
    GalleriesComponent,
    ContactusComponent,
    FeedbackComponent,
    AddfeedbackComponent,
    PicturesComponent,
    MyPipePipe,
    PhonenumbervalidatorDirective,
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}


  