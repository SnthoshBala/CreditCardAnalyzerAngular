import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-chart',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class ChartComponent implements OnInit {

  // public total = 0;
  // public cashBack = 0;
    object:any = {}

  constructor(public listService:ListService,private uploadService: UploadService) { 
  }

  custno=''
  total=0
  reward=0
  payment=''

  ngOnInit(): void {
    this.object = JSON.parse(localStorage?.getItem("object") || '{}');
    this.custno=this.object.customerAccNumber
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
