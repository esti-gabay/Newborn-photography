import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Gallery } from 'src/app/gallery';
import { HttpService } from 'src/app/servieces/http.service';

@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  styleUrls: ['./galleries.component.scss']
})
export class GalleriesComponent implements OnInit {
  arrGalleries:Array<Gallery>=[];
  galleries:Observable<Gallery[]>=new Observable();
  subscription:Subscription=new Subscription();

    constructor(public httpSer:HttpService,public route:Router) { 
       this.galleries=httpSer.getGallery();
    }
  
    ngOnInit(): void {
          console.log('before');
          this.subscription=this.httpSer.getGallery().subscribe((data)=>{
            this.arrGalleries=data;
            console.log('data',this.arrGalleries)
          },(err)=>{
          console.log('error');
        } )
        console.log('after');
    }
    moreDetails(Category:any){
      this.route.navigate(['/gallery/pictures/'+Category]);
    }

}
