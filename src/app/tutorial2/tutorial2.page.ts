import { Component, OnInit } from '@angular/core';

interface Laptop {
  lbrand: string;
  CPU: string;
  GPU: string;
  RAM: number;
  Weight: number;
  Screen: number;
  Storage: boolean;
  OS: boolean;
  ManuDate: string;
}

@Component({
  selector: 'app-tutorial2',
  templateUrl: './tutorial2.page.html',
  styleUrls: ['./tutorial2.page.scss'],
})
export class Tutorial2Page implements OnInit {
  constructor() {}

  ngOnInit() {}

  lbrand = '';
  CPU = '';
  GPU = '';
  RAM = 0;
  Weight = 0;
  Screen = 0;
  Storage = false;
  OS = false;
  ManuDate = '';

  selectedSegment = [];
  alertButtons = ['OK'];

  product: Laptop[] = [];

  Add() {
    this.product.push({
      lbrand: this.lbrand,
      CPU: this.CPU,
      GPU: this.GPU,
      RAM: Number(this.RAM),
      Weight: Number(this.Weight),
      Screen: Number(this.Screen),
      Storage: Boolean(this.Storage),
      OS: Boolean(this.OS),
      ManuDate: this.ManuDate,
    });
  }

  deleteRecord() {
    this.product.pop();
  }
}
