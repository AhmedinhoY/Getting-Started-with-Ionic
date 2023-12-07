import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member, FBServiceService } from '../fbservice.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  newMember: Member = {} as Member;

  constructor(public fb: FBServiceService) {}

  ngOnInit() {}

  AddMember() {
    this.fb
      .addMember(this.newMember)
      .then((res) => {
        alert('Added Successfully');
      })
      .catch((err) => {
        console.log('Error in adding');
      });
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
