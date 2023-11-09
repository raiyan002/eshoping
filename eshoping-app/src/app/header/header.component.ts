import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan:string= "Your one stop soln for everything."
  source:string= "../../assets/shoping.jpg"
}
