import { topNewsClass } from './../models/news-list.model';
import { Injectable } from '@angular/core';
import { ListOfNews } from '../models/news-list.model';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  bookmarkData: any = [];
  newsDetail: ListOfNews | topNewsClass;

  constructor() { }
    
  setBookmark = (data: ListOfNews | topNewsClass) => {
    if(this.bookmarkData.length > 0) {
      for(let list = 0 ; list < this.bookmarkData.length ; list++) {
        if(data.name === this.bookmarkData[list].name) {
          this.bookmarkData.splice(this.bookmarkData[list], 1);        
        } 
      }
    } else {
      this.bookmarkData.push(data);
    }
   
    sessionStorage.setItem('bookmark', JSON.stringify(this.bookmarkData));
  } 

  getBookmark = () => {
    return this.bookmarkData;
  } 

  setNewsDeatil = (data: ListOfNews | topNewsClass) => {
    this.newsDetail = data;
    sessionStorage.setItem('detail', JSON.stringify(this.newsDetail));
  }

  getNewsDetail = () => {
    return this.newsDetail
  }

}
