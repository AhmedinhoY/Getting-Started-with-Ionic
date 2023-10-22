import { Component, OnInit } from '@angular/core';

interface user {
  fullName: string;
  contactNumber: number;
}

@Component({
  selector: 'app-tutorial1',
  templateUrl: './tutorial1.page.html',
  styleUrls: ['./tutorial1.page.scss'],
})
export class Tutorial1Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  alertButtons = ['OK'];
  alertInputs = [
    {
      name: 'nameAlertInput',
      placeholder: 'Full Name',
    },
  ];

  fullName = '';
  contactNumber = '';
  counter = 0;

  List: user[] = [];

  // <-----functions----->

  addUser() {
    this.List.push({
      fullName: this.fullName,
      contactNumber: Number(this.contactNumber),
    });
  }
  deleteUser() {
    this.List.pop();
  }
  editUser() {}
  incrementCounter() {
    this.counter++;
  }
}
