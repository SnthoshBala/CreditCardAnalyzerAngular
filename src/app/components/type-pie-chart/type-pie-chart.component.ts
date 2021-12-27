import { Component, ViewChild,OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-type-pie-chart',
  templateUrl: './type-pie-chart.component.html',
  styleUrls: ['./type-pie-chart.component.scss']
})
export class TypePieChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight:200
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartLegend = true;
  
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  pie:number[]=[]

  constructor(private uploadService: UploadService) { 
  }
  mychart:boolean=false
  custno=localStorage.getItem('custno')!!
  ngOnInit(): void {
    this.uploadService.getUser(this.custno).subscribe(
      data=>
      {
        var datas= data.customerCreditPurchase
        var labels_val=[]
        var datasets_val=[]
        for(var item of datas)
        {
          var x=item['activity']
          var y=item['amount_spent'].slice(1)
          labels_val.push(x)
          datasets_val.push(Number(y))
          this.pieChartData.datasets[0].data.push(Number(y))
        }
        this.pieChartData.labels=labels_val
        console.log(this.pieChartData.datasets[0].data)
        this.mychart=true
        this.pieChartLegend=true
        this.pie=datasets_val
      }
    )
  }
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data:[]
    }]
  };

}
