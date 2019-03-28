export class User {
  private name: any;
  private email: string;
  private dob: any;
  private location: any;
  private phone: string;
  private login: any;
  private picture: any;

  constructor(json?:any) {
    if (json) {
        this.name = json.name;
        this.email = json.email;
        this.dob = json.dob;
        this.location = json.location;
        this.phone = json.phone;
        this.login = json.login;
        this.picture = json.picture;
    } else {
        this.name= '';
        this.dob = '';
        this.location = '';
        this.phone = '';
        this.login = '';
        this.picture = '';
    }
  }

  getFullName(): string {
    return this.name.first + " " + this.name.last;
  }

  getStreet(): string {
    return this.location.street;
  }

  getBirthDay(): string {
    return this.dob.date;
  }

  getPassword(): string {
    return this.login.password;
  }

  getPicture(): string {
    return this.picture.large;
  }

  getEmail(): string {
    return this.email;
  }

  getPhone(): string {
    return this.phone;
  }


}
