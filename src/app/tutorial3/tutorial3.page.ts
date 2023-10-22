import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tutorial3',
  templateUrl: './tutorial3.page.html',
  styleUrls: ['./tutorial3.page.scss'],
})
export class Tutorial3Page implements OnInit {
  public alertButtons = ['OK'];
  listLength = 0;
  constructor(public DataSrv: DataService) {
    this.listLength = DataSrv.getListLength();
  }

  ngOnInit() {}
}
