import { DataShareService } from './../../service/data-share.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { NewsService } from 'src/app/service/news.service';
import { ListOfNews, topNewsClass } from 'src/app/models/news-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allNews: ListOfNews[];
  topNews: topNewsClass[];
  totalNews: any;
  start: number = 0;
  end: number = 5;
  temp: any = [];

  constructor(private newsService: NewsService,
              private dataShareService: DataShareService,
              private router: Router) { }

  ngOnInit() {
    this.getNews();
    this.getTopNews();
  }

  public onScrollLoad = (start: number, end:  number) => {
    console.log(this.start, ' ', this.end)
    
    for(let list = start ; list < end ; list++) {
      if(list < this.totalNews.length) {
        this.temp.push(this.totalNews[list]);
      }
    }
    this.allNews = this.temp;
  }

  public getNews = () => {
    this.totalNews = this.newsService.getNews();
    this.onScrollLoad(this.start, this.end);
    console.log(this.allNews);
  }

  public getTopNews = () => {
    // this.newsService.topNews().subscribe(data => {
    //   this.topNews = data;
    //   console.log("top ->", this.topNews)
    // });
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.start = this.end + 1;  
        this.end = this.end + 5;      
        this.onScrollLoad(this.start, this.end);
      }
  }

  public bookmark = (selectedNews:  ListOfNews | topNewsClass) => {
    this.dataShareService.setBookmark(selectedNews);
  }

  public showDetails = (details: ListOfNews | topNewsClass) => {
    this.dataShareService.setNewsDeatil(details);
    this.router.navigate(['/details']);
  }

  public checkIsBookmarked = (news: ListOfNews | topNewsClass) => {
    console.log("here");
    const bookmarked = this.dataShareService.getBookmark()
    if(bookmarked.length > 0) {
      for(let list = 0 ; list < bookmarked.length ; list++) {
        if(news.name === bookmarked[list].name) return true;          
        else return false; 
      }
    }
  }
  

}
