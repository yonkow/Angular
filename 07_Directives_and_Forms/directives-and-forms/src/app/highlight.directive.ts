import {
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

type MyVoid = () => void;

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit, OnDestroy {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // * @HostListener('mouseover', ['$event']) mouseOverHandler(e: MouseEvent) {
  // console.log('mouseover: ', e);
  // }

  unsubFromEventsArray: MyVoid[] = [];

  ngOnInit(): void {
    // console.log(this.elRef.nativeElement);
    // ! this is bad practice - Never directly access DOM elements - USE ABSTRACT(renderer)
    // this.elRef.nativeElement.style.background = 'orange';

    // * Good practice - Abstract manupulation over DOM
    // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'pink');

    const mouseEnterEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseenter',
      this.mouseEnterHandler.bind(this)
    );

    const mouseLeaveEvent = this.renderer.listen(
      this.elRef.nativeElement,
      'mouseleave',
      this.mouseLeaveHandler.bind(this)
    );

    this.unsubFromEventsArray.push(mouseEnterEvent)
    this.unsubFromEventsArray.push(mouseLeaveEvent)
  }

  
  mouseEnterHandler(e: MouseEvent): void {
    // console.log(e);
    
    /** Setting styles */
    // this.renderer.setStyle(
      //   this.elRef.nativeElement,
      //   'background-color',
      //   'orange'
      // );
      
      /** Setting classes */
      this.renderer.addClass(this.elRef.nativeElement, 'highlight');
    }
    
    mouseLeaveHandler(e: MouseEvent): void {
      // console.log('mouse leave triggered');
      
      /** Setting styles */
      // this.renderer.setStyle(
        //   this.elRef.nativeElement,
        //   'background-color',
        //   'initial'
        // );
        
        /** Setting classes */
        this.renderer.removeClass(this.elRef.nativeElement, 'highlight');
      }

      ngOnDestroy(): void {
        console.log('On desteroy Invoked', this.unsubFromEventsArray);

        this.unsubFromEventsArray.forEach((eventFn) => {eventFn()})
        
      }
    }
    