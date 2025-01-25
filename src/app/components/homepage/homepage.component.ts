import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  providers: [NgbCarouselConfig]
})
export class HomepageComponent implements OnInit {
  ngOnInit(): void {
    
  }
}


