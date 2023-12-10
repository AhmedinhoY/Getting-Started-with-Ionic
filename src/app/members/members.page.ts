import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member, FBServiceService } from '../fbservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  newMember: Member = {} as Member;
  membersForm: FormGroup = new FormGroup({});

  constructor(public fb: FBServiceService, public formBuilder: FormBuilder) {
    this.membersForm = formBuilder.group({
      studentID: ['', Validators.required],
      firstName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(30)]),
      ],
      lastName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(30)]),
      ],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      major: ['', Validators.required],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
        ]),
      ],
      phoneNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^(33|34|36|37|38|66|39)\d{6}$/),
        ]),
      ],
    });
  }

  ngOnInit() {}

  AddMember() {
    if (this.membersForm.valid) {
      this.newMember = this.membersForm.value;
      this.fb
        .addMember(this.newMember)
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

  UpdateMember(member: Member) {
    this.fb
      .updateMember(member)
      .then((res) => {
        alert('Updated Successfully');
      })
      .catch((err) => {
        console.log('error in update');
      });
  }

  DeleteMember(member: Member) {
    this.fb
      .deleteMember(member)
      .then((res) => {
        alert('Deleted Successfully');
      })
      .catch((err) => {
        console.log('error in delete');
      });
  }
}
