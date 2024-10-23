import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { VideoService } from '../../services/video.service';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  topNews: any[] = [];
  newsSubscription: Subscription = new Subscription();
  videoSubscription: Subscription = new Subscription();
  videoUrl: SafeResourceUrl = ''; 

  constructor(
    private newsService : NewsService,
    private domSanitizer: DomSanitizer,
    private videoService: VideoService,
  ){}


  ngOnInit(): void {
    // notizie
    this.newsSubscription = this.newsService.getTopNews().subscribe({
      next: (data:any) => {
        //console.log('Dati ricevuti:', data);
        this.topNews = data.articles.filter((article: { title: string; }) => article.title && article.title !== '[Removed]');
      },
      error: (error) => {
        console.error('Errore nel recupero delle notizie',error);
      },
      complete: () => {
        //console.log("Recupero notizie completato");
      }
    });

    // video
    this.videoSubscription = this.videoService.getLatestVideo().subscribe({
      next: (data:any) => {
        //console.log('Video ricevuto:', data);
        const videoId = data.items[0].id.videoId;
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      },
      error: (error) => {
        console.error('Errore nel recupero del video', error);
      },
      complete: () => {
        //console.log('Video ricevuto e completato');
      }
    })

  }


  ngOnDestroy(){
    if(this.newsSubscription)
        this.newsSubscription.unsubscribe();
    if(this.videoSubscription)
        this.videoSubscription.unsubscribe();
  }

}

