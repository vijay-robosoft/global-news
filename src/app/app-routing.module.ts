import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'details',
    loadChildren: './details/details.module#DetailsModule'
  },
  {
    path: 'bookmark',
    loadChildren: './bookmark/bookmark.module#BookmarkModule'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
