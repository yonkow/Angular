import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/theme';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css'],
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getThemes().subscribe((themes) => {
    //   this.themes = themes;

    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 2000);
    // });

    this.api.getThemes().subscribe({
      next: (themes) => {
        this.themes = themes;

        setTimeout(() => {
          this.isLoading = false;
        }, 250);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
