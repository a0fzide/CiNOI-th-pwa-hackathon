import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  date: any;
  month: any;
  year: any;
  day: any;
  expire: number = 30;
  week: any[] = [0,1,2,3,4];
  cycle: number = 1;
  calendar: Object = {};
  unixtime: number;
  lines: any[];
  constructor(public navCtrl: NavController) {
    this.unixtime = new Date().getTime();
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
      this.calendar[this.day+i] = {'day': new Date(this.unixtime+(i*86400000)).getDay(),
      'date':new Date(this.unixtime+(i*86400000)).getDate(),
      'month':new Date(this.unixtime+(i*86400000)).getMonth(),
      'year':new Date(this.unixtime+(i*86400000)).getFullYear()
    };
    }
    console.log(Object.keys(this.calendar).length);
  }

}
