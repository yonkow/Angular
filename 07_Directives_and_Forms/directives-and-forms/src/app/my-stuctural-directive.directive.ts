import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  Optional,
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
  @Input() myTmpRef: TemplateRef<any> | undefined;

  constructor(
    @Optional() private templateRef: TemplateRef<any>,
    private viewContainter: ViewContainerRef
  ) {
    console.log(templateRef);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on Changes', this.appMyStucturalDirective);
    console.log('myTmpRef: ', this.myTmpRef);
    console.log('templateRef: ', this.templateRef);

    const template = this.templateRef || this.myTmpRef
    

    if (this.appMyStucturalDirective) {
      this.viewContainter.createEmbeddedView(template, 
        // CONTEXT
        {
          myCustomValue: 'this is my custom message!',
          myNum: 123,
          $implicit: 'Default value'
        });
    } else {
      this.viewContainter.clear();
    }
  }
}
