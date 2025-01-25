import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FeedBack } from 'src/app/feed-back';
import { HttpService } from 'src/app/servieces/http.service';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'app-addfeedback',
  templateUrl: './addfeedback.component.html',
  styleUrls: ['./addfeedback.component.scss']
})
export class AddfeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;
  arrFeedBack:Array<FeedBack>=[];
  subscription:Subscription=new Subscription();
  value:string="את זכאית ל15% הנחה בהזמנת שעת צילום ✔" 

  constructor(public httpSer:HttpService) {  }
  
 
  ngOnInit(): void {

    this.feedbackForm=new FormGroup(
      {
        name:new FormControl(),
        email:new FormControl("",[Validators.required]),
        phone:new FormControl("",[Validators.required]),
        city:new FormControl("",[Validators.maxLength(15),Validators.minLength(4)]),
        feedBack:new FormControl("",[Validators.required]),
        
      });
    
  }
  sumbitForm(){
    let data = this.feedbackForm.value;
    console.log(data.name);
    let f:  FeedBack={name:data.name,feedBack:data.feedBack,numberLike:0,date:Date.now()};
    console.log('before');
    this.subscription=this.httpSer.addFeedback(f).subscribe((data)=>{
      this.arrFeedBack=data;
      console.log('data',this.arrFeedBack)
    },(err)=>{
    console.log('error');
  } )
  console.log('after');

  this.httpSer.setGift(this.value);
  alert('success')
  }

}


