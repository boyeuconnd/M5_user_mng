import {Injectable} from '@angular/core';
import {IUser} from './user/IUser/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser [] = [
    {
      id: 1,
      name: 'name1',
      email: 'email1@gmail.com',
      group_id: 1,
    },
    {
      id: 2,
      name: 'name2',
      email: 'email2@gmail.com',
      group_id: 2,
    },
    {
      id: 3,
      name: 'name3',
      email: 'email3@gmail.com',
      group_id: 3
    }

  ];

  constructor() {
  }

  public getUsers(): IUser[] {
    return this.users;

  }

  getUserById(id:number):IUser{
    for(let idx = 0;idx< this.users.length;idx++){
      if(this.users[idx].id == id){
        return this.users[idx]

      }
    }
  }

  editUserById(user:IUser){
    for(let idx = 0; idx<this.users.length;idx++){
      if(this.users[idx].id == user.id){
        this.users[idx] = user;
      }
    }
  }

  public filerByKeyword(keyword: string) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) !== -1;
    });
  }

  add(user:IUser):IUser{
    this.users.push(user)
    return user;
  }
}
