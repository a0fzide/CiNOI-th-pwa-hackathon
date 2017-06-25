import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  now: any;
  date: any;
  month: any;
  year: any;
  day: any;
  expire: number = 30;
  week: any[] = [0, 1, 2, 3, 4];
  cycle: number = 1;
  calendar: Object = {};
  unixtime: number;
  allCalendar: any[];
  end: any;
  constructor(public navCtrl: NavController) {
    this.now = new Date().toDateString();
    
    this.unixtime = new Date().getTime();
    this.end = new Date(this.unixtime+(29 * 86400000) ).toDateString();
    this.day = new Date().getDay();
    this.date = new Date().getDate();
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    console.log(this.day + " " + this.date + " " + this.month + " " + this.year);
    if (this.day == 6) {
      this.week.push(5);
    }
    console.log(this.week);
    for (let i = 0; i < 30; i++) {
      this.calendar[this.day + i] = {
        'day': new Date(this.unixtime + (i * 86400000)).getDay(),
        'date': new Date(this.unixtime + (i * 86400000)).getDate(),
        'month': new Date(this.unixtime + (i * 86400000)).getMonth(),
        'year': new Date(this.unixtime + (i * 86400000)).getFullYear(),
        'count': i
      };
    }
    let mock = { 'day': -1, 'date': -1, 'month': -1, 'year': -1, 'count': -1 };
    let count = 0;
    let allCalendar = [];
    for (let i = 0; i < 42; i++) {
      if (count == 0 && i < this.calendar[0].day) {
        // this.allCalendar[i]=={};
        allCalendar.push(mock);
      } else {
        // this.allCalendar[i]=this.calendar[count];
        if (this.calendar[count] != undefined) {
          allCalendar.push(this.calendar[count]);
          count = count + 1;
          console.log(count);
        } else {
          allCalendar.push(mock);
        }

      }
    }
    this.allCalendar = allCalendar;
    console.log(this.allCalendar)
    console.log(Object.keys(this.calendar).length);
  }
  getTrips(value: number, trip: number) {
    let count = trip;

      if (value == 1) {
        for(let x=0; x<30; x++) {
          if (this.calendar[x].day > 0 && this.calendar[x].day < 6){
            count = count-2;
          }
        }
      }
      if (value == 2) {
        for(let x=0; x<30; x++) {
          if (this.calendar[x].day > 0){
            count = count-2;
          }
        }
      }
      if (value == 3) {
        for(let x=0; x<30; x++) {
            count = count-2;
        }
      }
    return count;
  }
  getLastTrip(value: number, remainTrip: number) {
    let countDate = remainTrip / 2;
    if (remainTrip < 1) {
      return this.end = new Date(this.unixtime+((29 + countDate) * 86400000) ).toDateString();
    }
    return this.end = new Date(this.unixtime+((29) * 86400000) ).toDateString();
    
  }
}
