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
    },
    {
      id: 4,
      name: 'hong doan',
      email: 'doan@codegym.vn',
      group_id: 3
    },
    {
      id: 5,
      name: 'dang pham',
      email: 'dangpham@codegym.vn',
      group_id: 2
    },
    {
      id: 6,
      name: 'duc trung',
      email: 'trungho@codegym.vn',
      group_id: 3
    },
    {
      id: 7,
      name: 'vinh vat vo',
      email: 'trungho@codegym.vn',
      group_id: 3
    },
    {
      id: 8,
      name: 'thi thuy',
      email: 'test-email-8@codegym.vn',
      group_id: 3
    },
    {
      id: 9,
      name: 'van bang',
      email: 'test-email-5@codegym.vn',
      group_id: 3
    },
    {
      id: 10,
      name: 'khuat phong',
      email: 'test-email-7@codegym.vn',
      group_id: 3
    },
    {
      id: 11,
      name: 'van tuan',
      email: 'vantuan@codegym.vn',
      group_id: 3
    },
    {
      id: 12,
      name: 'le hieu',
      email: 'hieule@codegym.vn',
      group_id: 3
    },    {
      id: 13,
      name: 'test name 3',
      email: 'test-email-1@codegym.vn',
      group_id: 3
    },    {
      id: 14,
      name: 'test name 1',
      email: 'test-email-2@codegym.vn',
      group_id: 3
    },    {
      id: 15,
      name: 'test name 2',
      email: 'test-email-3@codegym.vn',
      group_id: 3
    },

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
