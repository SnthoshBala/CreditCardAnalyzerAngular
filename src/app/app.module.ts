import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './pages/upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/dashboard/dashboard.component';
import { WrapperComponent } from './components/navbar/navbar.component';
import { ChartComponent } from './components/cards/cards.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { TypePieChartComponent } from './components/type-pie-chart/type-pie-chart.component';
import { TypeLineChartComponent } from './components/type-line-chart/type-line-chart.component';
import {MatIconModule} from '@angular/material/icon';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { ListComponent } from './pages/list/list.component';
import { ChartUploadComponent } from './components/chart/chart.component';
import { TypeAllPieChartComponent } from './components/typeall-pie-chart/typeall-pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    UserComponent,
    WrapperComponent,
    ChartComponent,
    BarChartComponent,
    TypePieChartComponent,
    TypeLineChartComponent,
    UserProfileComponent,
    ForecastComponent,
    ListComponent,
    ChartUploadComponent,
    TypeAllPieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    NgChartsModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
