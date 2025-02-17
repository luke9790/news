import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { VideoService } from '../../services/video.service';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  topNews: any[] = [];
  newsSubscription: Subscription = new Subscription();
  videoSubscription: Subscription = new Subscription();
  videoUrl: SafeResourceUrl = '';
  currentSection: string = 'news';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private domSanitizer: DomSanitizer,
    private videoService: VideoService,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.currentSection = params['section'] || 'news';
      const category = this.mapSectionToCategory(this.currentSection);
      if (this.newsSubscription) {
        this.newsSubscription.unsubscribe();
      }
      this.newsSubscription = this.newsService.getNewsByCategory(category).subscribe({
        next: (data: any) => {
          this.topNews = data.articles.filter((article: { title: string; }) => article.title && article.title !== '[Removed]');
        },
        error: (error) => {
          console.error(`Errore nel recupero delle notizie per categoria ${category}:`, error);
        }
      });
    });

    this.videoSubscription = this.videoService.getLatestVideo().subscribe({
      next: (data: any) => {
        console.log('Video ricevuto:', data);
        const videoId = data.items[0].id.videoId;
        this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      },
      error: (error) => {
        console.error('Errore nel recupero del video', error);
      }
    });
  }

  private mapSectionToCategory(section: string): string {
    switch (section.toLowerCase()) {
      case 'economy':
      case 'business':
        return 'business';
      case 'entertainment':
        return 'entertainment';
      case 'news':
      case 'general':
        return 'general';
      case 'health':
        return 'health';
      case 'science':
        return 'science';
      case 'sports':
        return 'sports';
      case 'technology':
        return 'technology';
      default:
        return 'general';
    }
  }

  ngOnDestroy(): void {
    if (this.newsSubscription) {
      this.newsSubscription.unsubscribe();
    }
    if (this.videoSubscription) {
      this.videoSubscription.unsubscribe();
    }
  }
}
