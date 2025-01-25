import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfeedbackComponent } from './components/addfeedback/addfeedback.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PicturesComponent } from './components/pictures/pictures.component';


const routes: Routes = [
 
 {path:"",component:HomepageComponent},
 {path:"homepage",component:HomepageComponent},
 {path:"contact",component:ContactusComponent},
 {path:"feedback",component:FeedbackComponent},
 {path:"addfeedback",component:AddfeedbackComponent},
 {path:"gallery",component:GalleriesComponent,children:
 [
  {path:"pictures/:Category",component:PicturesComponent},
 ]}
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
