import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template:`
    <h1>{{title}}</h1>
    <h4>Pick a highlight color</h4>
    <div>
      <input type="radio" name="colors" (click)="color='lightgreen'">Green
      <input type="radio" name="colors" (click)="color='yellow'">Yellow
      <input type="radio" name="colors" (click)="color='cyan'">Cyan
    </div>
    <p [myHighlight]="color">Highlight me2!</p>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title = 'Tour of Heroes';
  color: string;
}



