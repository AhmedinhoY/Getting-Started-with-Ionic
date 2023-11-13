import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { map } from 'rxjs/operators';

//tutorial 2,3 -----------------------------------------------------------
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

//----------------------------------------------------------------

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
  list: laptop[] = [];
  itemsList: item[] = [];

  constructor(private http: HttpClient, public storage: Storage) {}

  loadJsonData() {
    return this.http.get('assets/data.json').pipe(
      map((data: any) => {
        this.itemsList = data;
        return data;
      })
    );
  }

  getListLength(): number {
    return this.list.length;
  }
}
