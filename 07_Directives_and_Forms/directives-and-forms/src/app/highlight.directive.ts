import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log(this.elRef.nativeElement);
    // ! this is bad practice - Never directly access DOM elements - USE ABSTRACT(renderer)
    // this.elRef.nativeElement.style.background = 'orange';

    // Good practice - Abstract manupulation over DOM
    this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');
  }
}
