import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  index: any = -1;

  constructor(public DataSrv: DataService, public ActRoute: ActivatedRoute) {}

  ngOnInit() {
    this.index = this.ActRoute.snapshot.paramMap.get('index');
  }
}
