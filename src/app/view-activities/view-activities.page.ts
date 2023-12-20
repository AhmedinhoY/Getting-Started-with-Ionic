import { Component, OnInit } from '@angular/core';
import { Activity, FBServiceService } from '../fbservice.service';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-view-activities',
  templateUrl: './view-activities.page.html',
  styleUrls: ['./view-activities.page.scss'],
})
export class ViewActivitiesPage implements OnInit {
  private currentUser: string = '';
  logged: boolean = false;
  constructor(public fb: FBServiceService) {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.currentUser = user.uid;

        alert('User is signed in');
        this.logged = true;
        // ...
      } else {
        alert('You need to sign in to access this page');
      }
    });
  }

  AddParticipant(activity: Activity) {
    this.fb.participate(this.currentUser, activity);
  }

  ngOnInit() {}
}
