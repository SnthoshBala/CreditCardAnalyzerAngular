import { Component, ViewChild,OnInit } from '@angular/core';
import { ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-type-line-chart',
  templateUrl: './type-line-chart.component.html',
  styleUrls: ['./type-line-chart.component.scss']
})
export class TypeLineChartComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ ],
        label: 'Customer expences',
        
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [ ],
        label: 'Cash Back',
        backgroundColor: 'rgba(77,83,96,0.2)',
        borderColor: 'rgba(1,83,96,1)',
        pointBackgroundColor: 'rgba(77,83,96,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(77,83,96,1)',
        fill: 'origin',
      },
     
    ],
    labels: [  ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    },
   
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

 
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  dataArray:any = []

  constructor() { }

  ngOnInit(): void {
    this.lineChartData.labels =  JSON.parse(localStorage?.getItem("object") || '{}').customerCreditPurchase.map((el: { date: any; }) => el.date);

    this.lineChartData.datasets[0].data =  JSON.parse(localStorage?.getItem("object") || '{}').customerCreditPurchase.map((el: { amount_spent: any; }) => el.amount_spent.slice(1));

    this.lineChartData.datasets[1].data =  JSON.parse(localStorage?.getItem("object") || '{}').customerCreditPurchase.map((el: { rewards_points: any; }) => el.rewards_points.slice(1));

    
    
  }

}
