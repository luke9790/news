import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiKey = environment.youtubeApiKey;
  private channelId = environment.channelId; 
  private apiUrlVideo = `https://www.googleapis.com/youtube/v3/search?key=${this.apiKey}&channelId=${this.channelId}&order=date&part=snippet&type=video&maxResults=1`;


  constructor(private http: HttpClient) { }


  getLatestVideo(): Observable<any> {
    return this.http.get(this.apiUrlVideo);
  }
}
