import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

 @Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user: User = new User();
  public eventDetail: string;
  public eventDesscription: string;

  constructor(
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) {

  }

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    this.spinner.show();

    this.userService.getUser()
      .subscribe((user: User) => {
            this.user = user;
            this.onEvent('name');
        }, (onError) => {},
        () => {
          this.spinner.hide();
        }
      )
  }

  onEvent(event: string): void {
    switch(event) {
       case "email": {
          this.eventDesscription = "My email address is";
          this.eventDetail = this.user.getEmail();
          break;
       }
       case "birthday": {
         this.eventDesscription = "My birthday is";
         this.eventDetail = this.user.getBirthDay();
          break;
       }
       case "address": {
         this.eventDesscription = "My Address is";
         this.eventDetail = this.user.getStreet();
          break;
       }
       case "phone": {
         this.eventDesscription = "My phone is";
         this.eventDetail = this.user.getPhone();
          break;
       }
       case "password": {
         this.eventDesscription = "My password is";
         this.eventDetail = this.user.getPassword();
          break;
       }

       default: {
         this.eventDesscription = "My name is";
         this.eventDetail = this.user.getFullName();;
          break;
       }
    }

  }

  newRandomUser() {
    this.getUser();
  }

}
