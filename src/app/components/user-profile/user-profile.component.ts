import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  //  id: number = 0  

  object:any = {}

  constructor(public listService:ListService) { }

  ngOnInit(): void {

    console.log(this.listService.chosenItem)
    this.object = this.listService.chosenItem = JSON.parse(localStorage?.getItem("object") || '{}');

    
  
    // this.route.queryParams.subscribe(params => {
    //   // this.name = params['name'];
    //   this.id = params['id']
    //   console.log(params,'params')
    // });
  }

}
