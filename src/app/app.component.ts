import { Component } from '@angular/core';
import { HttpService } from './servieces/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'basicProject';
  gift:string="בהוספת תגובה הינך זכאית למתנה";
  constructor(public serHttp:HttpService){
  this.serHttp.getGift().subscribe((n)=>{
    this.gift=n;
  })
  }
  
}