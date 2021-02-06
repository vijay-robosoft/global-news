import { NewsService } from 'src/app/service/news.service';
import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/service/data-share.service';
import { ListOfNews, topNewsClass } from 'src/app/models/news-list.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  details: ListOfNews | topNewsClass;
  topNewslist: topNewsClass[];

  constructor(private dataShareService: DataShareService,
              private newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.details = this.dataShareService.getNewsDetail();
    this.getTopNews();
    console.log(this.details);
  }

  public getTopNews = () => {
    this.newsService.topNews().subscribe(data => {
      this.topNewslist = data;
    });
  }

  public showDetails = (details: ListOfNews | topNewsClass) => {
    this.dataShareService.setNewsDeatil(details);
    this.router.navigate(['/details']);
  }

  public checkIsBookmarked = (news: ListOfNews | topNewsClass) => {
    if(news) {
      const bookmarked = this.dataShareService.getBookmark()
      if(bookmarked.length > 0) {
        for(let list = 0 ; list < bookmarked.length ; list++) {
          if(news.name === bookmarked[list].name) return true;          
          else return false; 
        }
      }
    }
    
  }

}
