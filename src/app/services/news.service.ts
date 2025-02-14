import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrlNews = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${environment.newsApiKey}`;

  constructor(private http: HttpClient) { }

  getTopNews(): Observable<any> {
    return this.http.get(this.apiUrlNews).pipe(
      tap(response => console.log('News API response:', response)),
      map(response => response),
      catchError(error => {
        console.error('Error fetching news:', error);
        throw error;
      })
    );
  }

  // business entertainment general health  science sports  technology.

  getNewsByCategory(category: string): Observable<any> {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${environment.newsApiKey}`;
    return this.http.get(url).pipe(
      tap(response => console.log(`News API response for category ${category}:`, response)),
      map(response => response),
      catchError(error => {
        console.error(`Error fetching news for category ${category}:`, error);
        throw error;
      })
    );
  }
}
