import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  rstate = [
    {id: 1, area: 120, rooms: 4, elev: 1 , parking:1 , price:2400},
    {id: 2, area: 80, rooms: 3, elev: 1 , parking:1 , price:1800},
    {id: 3, area: 40, rooms: 1, elev: 0 , parking:0 , price:1200},
    {id: 4, area: 140, rooms: 6, elev: 1 , parking:2 , price:3400},
    {id: 5, area: 100, rooms: 4, elev: 0 , parking:1 , price:2100},
  ];
  constructor() { }

  public getAll():Array<{id:number, area:number, rooms:number, elev:number,parking:number,price:number}>{
    return this.rstate;
  }

  /**
   * add
   */
  public add(rs:{id:number, area:number, rooms:number, elev:number,parking:number,price:number}) {
    this.rstate.push(rs);
  }

  public predict(rs:{area:number, rooms:number, elev:number,parking:number}) {
    return rs.area*20 + rs.rooms*5 + rs.elev*100 + rs.parking*200;
  }
}
