import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.css']
})
export class PredictComponent implements OnInit {

  rs : {id:number, area:number, rooms:number, elev:number,parking:number,price:number} = {id:0, area:0, rooms:0, elev:0,parking:0,price:0};
  result:number = 0;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

  calc(){
    this.result = this.dataService.predict(this.rs);

  }

}
