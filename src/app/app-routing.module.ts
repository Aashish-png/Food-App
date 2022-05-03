import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path: ''
  },
  {
    component:HomeComponent,
    path: 'search/:searchItem'

  },
  {
    component:HomeComponent,
    path: 'tag/:tag'

  },
  {
    component:AddDataComponent,
    path:'AddData'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
