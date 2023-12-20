import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, FBServiceService } from '../fbservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  newActivity: Activity = {} as Activity;
  activityForm: FormGroup = new FormGroup({});

  constructor(public fb: FBServiceService, public formBuilder: FormBuilder) {
    this.activityForm = formBuilder.group({
      title: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(30)]),
      ],
      date: ['', Validators.required],
      duration: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      venue: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(30)]),
      ],
      numberOfParts: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      ],
      topic: ['', Validators.required],
    });
  }

  ngOnInit() {}

  AddActivity() {
    if (this.activityForm.valid) {
      this.newActivity = this.activityForm.value;
      this.fb
        .addActivity(this.newActivity)
        .then((res) => {
          alert('Added Successfully');
        })
        .catch((err) => {
          console.log('Error in adding');
        });
    } else {
      alert('There are missing/wrong fields, Every field is required!!');
    }
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
