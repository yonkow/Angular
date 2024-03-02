// PROMISE
// -promises are not lazy, code invoked!
// - cannot be canceled

import { Observable, map } from "rxjs";

// - you can subscribe to only 1 value
const p = new Promise((resolve, reject) => {
    console.log('Promise invoked');
  
    setTimeout(() => {
      resolve(111);
      // reject('Why not?');
    }, 2000);
  });
  
  p.then((data) => {
    // console.log('from promise: ', data);
  })
    .then()
    .then()
    .catch((err) => console.error('Error: ', err));
  
  // Promise.resolve(112)
  //   .then((data) => data * 10)
  //   .then((x) => console.log('from promise 2: ', x));
  
  // sync analogy
  [1].map((x) => x * 2);
  
  // Observables
  // sync analogy
  [1, 2, 3, 4].map((x) => x * 2);
  
  // // async example
  // const o = new Observable((observer) => {
  //   observer.next(200);
  //   observer.next(201);
  //   observer.next(202);
  // });
  
  // o.subscribe((data) => {
  //   console.log('from observable: ', data);
  // });
  
  // Create custom interval
  const interval = (intervalValue: number) => {
    const o = new Observable<number>((observer) => {
      let counter = 0;
  
      const timer = setInterval(() => {
        observer.next(counter++);
  
        if (counter > 5) {
          observer.complete();
        }
      }, intervalValue);
      // clear data on destroy
      return () => {
        clearInterval(timer);
      };
    });
  
    return o;
  };
  
  // can invoked from rxjs or with our custom interval above ....
  // interval(2000).subscribe((data) => {
  //   console.log('data from Interval: ', data);
  // });
  
  const stream$ = interval(2000)
    .pipe(map((x) => x * 2))
    .pipe(map((x) => x * 10));
  
  // stream$.subscribe((data) => console.log(data));
  stream$.subscribe({
    next: (data) => console.log(data),
    error: (error) => console.error('error: ', error),
    complete: () => console.log('The stream has completed!'),
  });