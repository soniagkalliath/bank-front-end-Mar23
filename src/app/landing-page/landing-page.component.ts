import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  isReadMore:boolean=true
  toggle(){
    this.isReadMore = !this.isReadMore
  }
  
}
