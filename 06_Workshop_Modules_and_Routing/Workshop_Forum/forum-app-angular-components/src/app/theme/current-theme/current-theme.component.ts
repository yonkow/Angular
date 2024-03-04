import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/types/theme';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-current-theme',
  templateUrl: './current-theme.component.html',
  styleUrls: ['./current-theme.component.css'],
})
export class CurrentThemeComponent implements OnInit {
  theme: Theme | undefined;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.fetchTheme();
  }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  fetchTheme(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getSingleTheme(id).subscribe((theme) => {
      this.theme = theme;
      console.log(theme);
    });
  }
}
