import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerprofileService {

  constructor() { }
  dat: any;

  setData(dat: any) {
    this.dat = dat;
  }

  getData() {
    return this.dat;
}
}
