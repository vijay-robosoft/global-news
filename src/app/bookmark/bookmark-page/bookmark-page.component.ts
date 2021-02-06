import { Component, OnInit } from '@angular/core';
import { DataShareService } from 'src/app/service/data-share.service';
import { ListOfNews, topNewsClass } from 'src/app/models/news-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookmark-page',
  templateUrl: './bookmark-page.component.html',
  styleUrls: ['./bookmark-page.component.scss']
})
export class BookmarkPageComponent implements OnInit {

  bookmarked: ListOfNews | topNewsClass;

  constructor(private dataShareService: DataShareService,
              private router: Router) { }

  ngOnInit() {
    this.bookmarked = this.dataShareService.getBookmark();
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
