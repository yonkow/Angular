import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/posts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { apiUrl } = environment;

    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getSingleTheme(id: string) {
    const { apiUrl } = environment;

    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/posts`;
    if (limit) {
      url += `?limit=${limit}`;
    }
    return this.http.get<Post[]>(url);
  }
  // TODO
  // createTheme(themeName: string, postText: string) {
  //   const {apiUrl} = environment;
  //   let url = `${apiUrl}/themes`
    
  //   return this.http.post<Theme>(url, themeName: string, postText: string)
  // }
}
