import { Component } from '@angular/core';
import { MyStucturalDirectiveDirective } from '../my-stuctural-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isShown: boolean = true;

  toggle() {
    this.isShown = !this.isShown
  }

  simpleClick(directiveRef: MyStucturalDirectiveDirective) {
    console.log(directiveRef);
    
  }
}
