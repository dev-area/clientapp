import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  rslist:any;
  selectedRs:any;

  constructor(public dataService: DataService) { }

  public selectRstat(rs:any){
    this.selectedRs = rs;
  }

  ngOnInit(): void {
    this.rslist = this.dataService.getAll();
  }

}
