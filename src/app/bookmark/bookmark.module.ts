import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './bookmark.routes';
import { BookmarkPageComponent } from './bookmark-page/bookmark-page.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [BookmarkPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BookmarkModule { }
