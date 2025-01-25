import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FeedBack } from 'src/app/feed-back';
import { HttpService } from 'src/app/servieces/http.service';
import { MyPipePipe } from 'src/app/my-pipe.pipe';



@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
arrFeedBack:Array<FeedBack>=[];
feedbackarr:Observable<FeedBack[]>=new Observable();
subscription:Subscription=new Subscription();
sub:Subscription=new Subscription();


  constructor(public httpSer:HttpService,public route:Router) { 
     this.feedbackarr=httpSer.getAll();
  }

  ngOnInit(): void {
        console.log('before');
        this.subscription=this.httpSer.getAll().subscribe((data)=>{
          this.arrFeedBack=data;
          console.log('data',this.arrFeedBack)
        },(err)=>{
        console.log('error');
      } )
      console.log('after');
  }

  addFeedback()
  {
    this.route.navigate(['/addfeedback'])
  }
  addLike(feedback: FeedBack)
  {
  alert('addLike')
  feedback.numberLike=feedback.numberLike+1;
  this.sub=this.httpSer.addLike(feedback).subscribe()
  
 } 
}


