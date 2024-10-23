import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrlNews = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.newsApiKey}`;

  constructor(private http: HttpClient) { }

  getTopNews() {
    return this.http.get(this.apiUrlNews);
  }
}
