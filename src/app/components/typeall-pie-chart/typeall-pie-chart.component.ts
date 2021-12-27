import { Component, ViewChild,OnInit } from '@angular/core';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { UploadService } from 'src/app/services/upload.service';


@Component({
  selector: 'app-typeall-pie-chart',
  templateUrl: './typeall-pie-chart.component.html',
  styleUrls: ['./typeall-pie-chart.component.scss']
})
export class TypeAllPieChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        maxHeight:100
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
    this.uploadService.getUserPie().subscribe(
      data=>
      {
        console.log(data)
        var labels_val=data.label
        var datasets_val=data.value
        this.pieChartData.labels=labels_val
        this.pieChartData.datasets[0].data=datasets_val
        console.log(this.pieChartData.datasets[0].data)
        this.mychart=true
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
