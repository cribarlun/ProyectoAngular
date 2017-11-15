import {Injectable} from '@angular/core';
import {Employee} from '../Model/employee';


@Injectable()
export class UserProviderService {

  private activeUser: Employee;

  constructor() {

    this.activeUser = new Employee(
      'Sofía López',
      'sofiiitaaaa@gmail.com',
      'Programmer',
      32,
      true
    );
  }

  sessionUser(): Employee {
    return this.activeUser;
  }

  updateUser(user: Employee): void {
    this.activeUser = user;
  }

}
