import { getLocaleCurrencyCode } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedBack } from '../feed-back';
import { Gallery } from '../gallery';


@Injectable({
  providedIn: 'root'
})
export class HttpService 
{
  env=environment;
  constructor(private serHttp:HttpClient) { 

}
getAll():Observable<FeedBack[]>
{
  console.log('getAll');
  return this.serHttp.get<FeedBack[]>(this.env.URL+'/feedback');
}
addFeedback(feedback:FeedBack):Observable<FeedBack[]>
{
  return this.serHttp.post<FeedBack[]>(this.env.URL+'/feedback',feedback);
}

getGallery():Observable<Gallery[]>{
  console.log('getGallery');
  return this.serHttp.get<Gallery[]>(this.env.URL+'/gallery');
}

addLike(feedback:FeedBack)
{
  return this.serHttp.put<FeedBack[]>(this.env.URL+'/feedback',feedback);
}



//מתנה
private  gift$:Subject<string>=new Subject();
setGift(value:string)
{
  this.gift$.next(value);

}
getGift()
{
  return this.gift$;
}  
}
