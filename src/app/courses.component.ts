import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'courses',  // css selector
  template: `
    <h2> {{ title }} </h2>
    <ul> 
      <li *ngFor="let cours of courses">
        {{ cours }}
      </li>
    </ul>
    <p><input (keyup)="onKeyUp($event) " />With enter event param</p>
    <p><input (keyup.enter)="onKeyUp2() " />with keyup.enter</p>
    <p><input (keyup.enter)="onKeyUp3($event) " />recup valeur saisie</p>
    <p><input #email (keyup.enter)="onKeyUp4(email.value) " />avec passage param</p>
    <p><input [(ngModel)]="email2" (keyUp.enter)="onKeyUp5()" />two-way binding : vous avez tapé: {{ email2 }}</p>
    `
})

export class CoursesComponent {
  title = "List of courses";

  courses;

  email2;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp($event) {
    if($event.keyCode === 13) console.log('ENTER was pressed ');
  }

  onKeyUp2() {
    console.log('Magic! Enter pressed!');
  }
  
  onKeyUp3($event) {
    console.log($event.target.value);
  }
  
  onKeyUp4(email) {
    console.log(email);
  }
    
  onKeyUp5() {
    console.log(this.email2);
  }
}
