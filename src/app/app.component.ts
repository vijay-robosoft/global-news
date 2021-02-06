import { DataShareService } from 'src/app/service/data-share.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'globalnews';

  constructor(private dataShareService: DataShareService) {
    if(sessionStorage.getItem('bookmark') && sessionStorage.getItem('bookmark').length > 0) {
      const bookmarked = JSON.parse(sessionStorage.getItem('bookmark'))
      for(let list = 0 ; list < bookmarked.length ; list++) {
        this.dataShareService.setBookmark(bookmarked[list]);
      }
    }

    if(sessionStorage.getItem('detail')) {
      this.dataShareService.setNewsDeatil(JSON.parse(sessionStorage.getItem('detail')));
    }
  }

  

}
