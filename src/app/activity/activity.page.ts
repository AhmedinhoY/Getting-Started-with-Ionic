import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, FBServiceService } from '../fbservice.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  newActivity: Activity = {} as Activity;

  constructor(public fb: FBServiceService) {}

  ngOnInit() {}

  AddActivity() {
    this.fb
      .addActivity(this.newActivity)
      .then((res) => {
        alert('Added Successfully');
      })
      .catch((err) => {
        console.log('Error in adding');
      });
  }

  UpdateActivity(activity: Activity) {
    this.fb
      .updateActivity(activity)
      .then((res) => {
        alert('Updated Successfully');
      })
      .catch((err) => {
        console.log('error in update');
      });
  }

  DeleteActivity(activity: Activity) {
    this.fb
      .deleteActivity(activity)
      .then((res) => {
        alert('Deleted Successfully');
      })
      .catch((err) => {
        console.log('error in delete');
      });
  }
}
