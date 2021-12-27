import { ListService } from './../../services/list.service';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Models/CustomerSend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  itemList: Item[] = [];

  constructor(
    public listService:ListService,
    private router: Router
  ) { }

  ngOnInit(): void {
  
    this.listService.getItemList().subscribe(
      (response: any) => { this.itemList = response; },
      (error: any) => { console.log(error); });

    
  }

  btnClick= (id:any) => {
    // this.listService.chosenItem = this.itemList[id-1]
    localStorage.setItem ("object", JSON.stringify(this.itemList[id-1]));
    // this.listService.chosenItem = JSON.parse(localStorage?.getItem("object") || '{}');
    // console.log(this.listService.chosenItem)
    console.log(id,"iddddddddddddd")
    this.router.navigateByUrl(`/user/${id}`);
    
};

}
