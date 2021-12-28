import { Component, OnInit } from '@angular/core';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-chart-upload',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartUploadComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

  custno=localStorage.getItem('custno')!!
  total=0
  reward=0
  payment=''
  ngOnInit(): void {
    this.uploadService.getUser(this.custno).subscribe(
      data=>
      {
        var datas= data.customerCreditPurchase
        var total=0
        var reward=0
        this.payment=data.customerPaymentDue[data.customerPaymentDue.length-1]
        console.log(this.payment)
        for(var item of datas)
        {
          var x=Number(item['rewards_points'].replace(",","").slice(1))
          var y=Number(item['amount_spent'].replace(",","").slice(1))
          var total=total+y
          var reward=reward+x
        }
        this.total=Math.floor(total)
        this.reward=reward
      }
    )
  }

}
