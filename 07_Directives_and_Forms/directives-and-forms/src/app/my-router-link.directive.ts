import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyRouterLink]',
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = '';

  constructor() {}
  ngOnInit(): void {
    console.log(this.appMyRouterLink);
  }
}
