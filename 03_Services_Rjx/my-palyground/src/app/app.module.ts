import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { UserService } from './user.service';
import { Observable, map } from 'rxjs';

@NgModule({
  declarations: [AppComponent, UserListComponent, UserItemComponent],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}