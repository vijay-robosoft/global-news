import { NewsService } from 'src/app/service/news.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalNews: any;
  searchText: any = new FormControl('');

  constructor(private router: Router,
              private newsService: NewsService) { }

  ngOnInit() {
    this.getNews();
  }

  public getNews = () => {
    if(this.newsService.newsList) {

    } else {
      this.totalNews = this.newsService.getNews();
    }
    
  }

  public goTo = (endPoint: string) => this.router.navigate(['/'+endPoint]);

}
