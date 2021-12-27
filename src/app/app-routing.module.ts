import { ListComponent } from './pages/list/list.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { UserComponent } from './pages/dashboard/dashboard.component';
import { WrapperComponent } from './components/navbar/navbar.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './pages/upload/upload.component';

const routes: Routes = [
  {
    path:'',
    component:WrapperComponent,
    children:[
      {path:'',redirectTo:'/upload',pathMatch:'full'},
      {
        path:'upload',
        component:UploadComponent
      },
      {
        path:'user',
        component:UserComponent
      },
      {
        path:'user/:id',
        component:UserComponent
      },
      {
        path:'forecast',
        component:ForecastComponent
      }
      ,{
        path:'list',
        component:ListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
