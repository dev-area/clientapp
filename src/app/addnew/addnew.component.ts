import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {

  rs : {id:number, area:number, rooms:number, elev:number,parking:number,price:number} = {id:0, area:0, rooms:0, elev:0,parking:0,price:0};

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  creaters(){
    this.dataService.add(this.rs);
    this.rs = {id:0, area:0, rooms:0, elev:0,parking:0,price:0};

  }
}
