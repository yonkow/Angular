import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appMyStucturalDirective]',
  exportAs: 'appMyStucturalDirective',
})
export class MyStucturalDirectiveDirective implements OnChanges {
  @Input() appMyStucturalDirective: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainter: ViewContainerRef
  ) {
    console.log(templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on Changes', this.appMyStucturalDirective);

    if (this.appMyStucturalDirective) {
      this.viewContainter.createEmbeddedView(this.templateRef, 
        // CONTEXT
        {
          myCustomValue: 'this is my custom message!',
          myNum: 123
        });
    } else {
      this.viewContainter.clear();
    }
  }
}
