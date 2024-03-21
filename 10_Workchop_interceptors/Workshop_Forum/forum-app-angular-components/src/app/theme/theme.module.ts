import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { MainComponent } from './main/main.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SharedModule } from '../shared/shared.module';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewThemeComponent,
    CurrentThemeComponent,
    PostsListComponent,
    ThemesListComponent,
    MainComponent,
  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule, FormsModule],
})
export class ThemeModule {}
