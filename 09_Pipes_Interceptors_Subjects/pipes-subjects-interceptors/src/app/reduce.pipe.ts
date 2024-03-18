import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  pure: true, //* by Default, result is momoized, invoked on change of the reference
  // pure: false, //* not a pure fn, not memoized, invoked on every change
})
export class ReducePipe<T> implements PipeTransform {
  transform(
    array: T[],
    callbackFn: (acc: any, curr: any) => any,
    initialValue: T
  ): unknown {
    // const sum = (acc, curr) => acc + curr;
    // [1, 2, 3, 4].reduce(callbackFn, 0);
    // console.log('Invoked from pipe');

    return array.reduce(callbackFn, initialValue);
  }
}
