// @ts-nocheck
import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

// AngularFire
import {
  collection,
  collectionData,
  CollectionReference,
  DocumentReference,
} from '@angular/fire/firestore';

import {
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  docData,
  setDoc,
  addDoc,
  query,
} from '@angular/fire/firestore';

import { DocumentData } from 'firebase/firestore';

import { Observable } from 'rxjs';

//members interface
export interface Member {
  studentID?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  gender?: string;
  major?: string;
  phoneNumber?: number;
  email?: string;
}

export interface Activity {
  title?: string;
  date?: string;
  duration?: string;
  venue?: number;
  numberOfParts?: number;
  topic?: string;
}

@Injectable({
  providedIn: 'root',
})
export class FBServiceService {
  // 2. Arrays of any
  public members: any[] = [];
  public activities: any[] = [];
  // 3. Observable arrays
  public members$: Observable<Member[]>;
  public activities$: Observable<Activity[]>;

  // 4. Collection reference
  memberCollection: CollectionReference<DocumentData>;
  activityCollection: CollectionReference<DocumentData>;

  constructor(public firestore: Firestore) {
    // get a reference to the members collection
    this.memberCollection = collection(this.firestore, 'Members');
    this.activityCollection = collection(this.firestore, 'Activity');

    this.getMembers(); // get members as observable
    this.getActivity(); // get members as observable

    this.getMembersCopy(); // get members by copy into array
    this.getActivityCopy(); // get members by copy into array
  }

  async getMembers() {
    const q = query(collection(this.firestore, 'Members'));
    this.members$ = collectionData(q, { idField: 'id' }) as Observable<
      Member[]
    >;
  }
  async getActivity() {
    const q = query(collection(this.firestore, 'Activities'));
    this.activities$ = collectionData(q, { idField: 'id' }) as Observable<
      Activity[]
    >;
  }

  async getMembersCopy() {
    const querySnapshot = await getDocs(collection(this.firestore, 'Members'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots //console.log(doc.id, " => ", doc.data());
      this.members.push(doc.data());
    });
  }
  async getActivityCopy() {
    const querySnapshot = await getDocs(
      collection(this.firestore, 'Activities')
    );
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots //console.log(doc.id, " => ", doc.data());
      this.activities.push(doc.data());
    });
  }
  // Create Data in Firestore with Add()
  addMember(member): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, 'Members'), member);
  }
  addActivity(activity): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, 'Activities'), activity);
  }
  // Create Member in Firestore with updateDoc()
  updateMember(member: Member): Promise<DocumentReference> {
    return setDoc(doc(this.firestore, 'Members', member.id), {
      StudentID: member.studentID,
      FirstName: member.firstName,
      LastName: member.lastName,
      Age: member.age,
      Gender: member.gender,
      Major: member.major,
      PhoneNumber: member.phoneNumber,
      Email: member.email,
    });
    //when updating the member by update button, the data did't show in the list
  }
  updateActivity(activity: Activity): Promise<DocumentReference> {
    return setDoc(doc(this.firestore, 'Activities', activity.id), {
      Title: activity.title,
      Date: activity.date,
      Duration: activity.duration,
      Venue: activity.venue,
      NumberOfParticipations: activity.numberOfParts,
      Topic: activity.topic,
    });
    //when updating the member by update button, the data did't show in the list
  }

  // Delete Document Data in Firestore with deleteDoc()
  deleteMember(member: Member): Promise<void> {
    return deleteDoc(doc(this.firestore, 'Members', member.id));
  }
  // Delete Document Data in Firestore with deleteDoc()
  deleteActivity(activity: Activity): Promise<void> {
    return deleteDoc(doc(this.firestore, 'Activities', activity.id));
  }
}
