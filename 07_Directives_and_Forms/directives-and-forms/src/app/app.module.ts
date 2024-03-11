import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStucturalDirectiveDirective } from './my-stuctural-directive.directive';
import { FormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyRouterLinkDirective,
    MyStucturalDirectiveDirective,
    MaxCountDirective,
  ],
  imports: [BrowserModule, 
    AppRoutingModule, 
    FormsModule, //TEMPLATE DRIVEN APPROACH
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
