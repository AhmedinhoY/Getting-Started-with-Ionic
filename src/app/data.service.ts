import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';

//-------------------------tutorial 3---------------------------------------
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

//-------------------------tutorial 4---------------------------------------

export interface item {
  name: string;
  nav: item[];
  cpu?: string;
  ram?: string;
  storage?: string;
  screen?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //-------------------------tutorial 2---------------------------------------

  getListLength(): number {
    return this.list.length;
  }
  //---------------------tutorial 4------------------------------------------------
  list: laptop[] = [];
  itemsList: item[] = [];

  getDataFromFileButton: boolean = false;
  getDataFromStorageButton: boolean = true;

  constructor(private http: HttpClient, public storage: Storage) {}

  //--------------------------tutorial 4--------------------------------------

  loadJsonData() {
    return this.http.get('assets/data.json').pipe(
      map((data: any) => {
        this.itemsList = data;
        return data;
      })
    );
  }
}
