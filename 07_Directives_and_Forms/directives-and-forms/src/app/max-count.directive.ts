import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      provide: NG_VALIDATORS, //validatora an angular
      useExisting: MaxCountDirective, //vikni mi moq validator
      multi: true, // izpolzvai poveche ot edin validator
    },
  ],
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const len = control.value?.length || 0;

    if (!this.appMaxCount || len <= this.appMaxCount) {
      return null;
    }

    return { appMaxCount: this.appMaxCount };
  }
}
