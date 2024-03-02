import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable, interval } from 'rxjs';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// PROMISE
// -promises are not lazy, code invoked!
// - cannot be canceled
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

// const interval = (intervalValue: number) => {
//   const o = new Observable<number>((observer) => {
//     let counter = 0;

//     const timer = setInterval(() => {
//       observer.next(counter++);
//     }, intervalValue);
//     // clear data on destroy
//     return () => {
//       clearInterval(timer);
//     };
//   });

//   return o;
// };

interval(2000).subscribe((data) => {
  console.log('data from Interval: ', data);
});
