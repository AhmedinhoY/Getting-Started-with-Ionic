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

import {
  Auth,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendSignInLinkToEmail,
} from '@angular/fire/auth';

import { DocumentData } from 'firebase/firestore';

import { Observable } from 'rxjs';

//members interface
export interface Member {
  studentID: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  major: string;
  phoneNumber: number;
  email: string;
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
  // members
  public members: any[] = [];
  public members$: Observable<Member[]>;
  memberCollection: CollectionReference<DocumentData>;

  // activity
  public activities: any[] = [];
  public activities$: Observable<Activity[]>;
  activityCollection: CollectionReference<DocumentData>;

  constructor(public firestore: Firestore, public auth: Auth) {
    // get a reference to the members collection
    this.memberCollection = collection(this.firestore, 'Members');
    this.getMembers(); // get members as observable
    this.getMembersCopy(); // get members by copy into array

    this.activityCollection = collection(this.firestore, 'Activity');
    this.getActivity();
    this.getActivityCopy();
  }

  // --------------------------Members Functions--------------------------------------
  async getMembers() {
    const q = query(collection(this.firestore, 'Members'));
    this.members$ = collectionData(q, { idField: 'id' }) as Observable<
      Member[]
    >;
  }

  async getMembersCopy() {
    const querySnapshot = await getDocs(collection(this.firestore, 'Members'));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots //console.log(doc.id, " => ", doc.data());
      this.members.push(doc.data());
    });
  }

  // Create Data in Firestore with Add()
  addMember(member): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, 'Members'), member);
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

  // Delete Document Data in Firestore with deleteDoc()
  deleteMember(member: Member): Promise<void> {
    return deleteDoc(doc(this.firestore, 'Members', member.id));
  }

  // -----------------------------Activity Functions-----------------------------------

  async getActivity() {
    const q = query(collection(this.firestore, 'Activities'));
    this.activities$ = collectionData(q, { idField: 'id' }) as Observable<
      Activity[]
    >;
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

  addActivity(activity): Promise<DocumentReference> {
    return addDoc(collection(this.firestore, 'Activities'), activity);
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
  deleteActivity(activity: Activity): Promise<void> {
    return deleteDoc(doc(this.firestore, 'Activities', activity.id));
  }

  // --------------------------Authorization Functions------------------------------------

  RegisterUser(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(' User created successfully', user);
      })
      .catch((error) => {
        alert(' Error creating user' + error.message);
      });
  }

  login(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('You have been logged in successfuly');
      })
      .catch((error) => {
        alert('Login failed');
      });
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('You have been logged out successfuly');
      })
      .catch((error) => {
        alert('Logout failed');
      });
  }
}
