import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, ReplaySubject, Subject, map } from 'rxjs';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

//*refresher - OBSERVABLE

// const p = new Promise((resolve, reject) => {
//   resolve(100);

//   //reject -> catch -> error
// });

// p.then(console.log);

// const observable$ = new Observable<number>((observer) => {
//   observer.next(101);
//   observer.next(102);
//   observer.next(103);

//   // obs.error(new Error('something went wrong'));

//   return () => {
//     //cleanup
//   };
// });

// // o.subscribe({
// //   next: console.log,
// //   error: (err) => {
// //     console.error('Error from subscribe: ', err);
// //   },
// // });

// observable$.pipe(map((n) => n * 10)).subscribe({
//   next: console.log,
//   error: (err) => {
//     console.error('Error from subscribe: ', err);
//   },
//   complete: () => console.log('Completed!'),
// });

// SUBJECTS -- HOT OBSERVABLE
// const subject$$ = new Subject();
// subject$$.subscribe(data => console.log('Niki: ', data)); //* A
// subject$$.next('Start of the movie');

// subject$$.subscribe(data => console.log('Gosho: ', data)); //* B
// subject$$.next('Middle part of the movie');
// subject$$.next('THE END!');

// const subject$$ = new Subject();
// subject$$.subscribe((data) => console.log('A: ', data)); //* A
// subject$$.next(100);

// subject$$.subscribe((data) => console.log('B: ', data)); //* B
// subject$$.subscribe((data) => console.log('C: ', data)); //* C
// subject$$.next(200);

// setTimeout(() => {
//   subject$$.subscribe((data) => console.log('D: ', data)); //* D
//   subject$$.next(300);
// }, 2000);

//REPLAY SUBJECT

const rSubject$$ = new ReplaySubject(5);
rSubject$$.next(1000);
rSubject$$.subscribe((data)=> console.log('Subscr 1: ', data)
)

for (let i = 1; i <= 30; i++) {
  rSubject$$.next(i)
}

console.log('------------------------------------------');
rSubject$$.subscribe((data)=> console.log('Subscr 2: ', data))

console.log('------------------------------------------');
rSubject$$.subscribe((data)=> console.log('Subscr 3: ', data))

