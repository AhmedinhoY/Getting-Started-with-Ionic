import { Injectable } from '@angular/core';

export interface laptop {
  Brand: String;
  CPU: String;
  GPU: String;
  RAM: Number;
  Weight: Number;
  Screen: Number;
  Storage: boolean;
  OS: boolean;
  Image: String;
  ManuDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  list: laptop[] = [
    {
      Brand: 'Dell',
      CPU: 'Intel i-7',
      GPU: 'Intel Iris',
      RAM: Number(8),
      Weight: Number(1.5),
      Screen: Number(13),
      Storage: true,
      OS: true,
      Image: './assets/dell.jpeg',
      ManuDate: new Date(),
    },
    {
      Brand: 'Macbook Air',
      CPU: 'Intel i-7',
      GPU: 'Intel Iris',
      RAM: Number(8),
      Weight: Number(1),
      Screen: Number(15),
      Storage: true,
      OS: false,
      Image: './assets/macbook air.jpeg',
      ManuDate: new Date(),
    },
    {
      Brand: 'MacBook Pro',
      CPU: 'Intel i-7',
      GPU: 'Intel Iris',
      RAM: Number(8),
      Weight: Number(1),
      Screen: Number(15),
      Storage: true,
      OS: false,
      Image: './assets/macbook pro.jpeg',
      ManuDate: new Date(),
    },
  ];

  getListLength(): number {
    return this.list.length;
  }
}
