import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/servieces/http.service';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.scss']
})

export class PicturesComponent implements OnInit {
  imgFromRoute:any={};
  constructor(public httpSer:HttpService,public route:ActivatedRoute) {
    route.params.subscribe((p)=>{
      let category=p["Category"];
      httpSer.getGallery().subscribe((d)=>
      {
        this.imgFromRoute= d.find(c=>c.Category==category);
        console.log(this.imgFromRoute);
      })
    })
    console.log('check');
   }

  ngOnInit(): void {
  }

}
