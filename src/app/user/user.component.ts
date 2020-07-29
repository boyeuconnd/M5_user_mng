import {Component, OnInit} from '@angular/core';
import {IUser} from './IUser/iuser';
import {UserService} from '../user.service';

import {IGroup} from '../core/group-mng/IGroup/igroup';
import {GroupService} from '../core/group-mng/service/group.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  titlePage = 'User list';
  users: IUser[] = [];
  groupList: IGroup[];

  constructor(private userService: UserService,
              private groupService: GroupService) {
  }

  ngOnInit(): void {
    this.getAllUser();
    this.getGroupList();
  }

  getGroupList(){
    this.groupList = this.groupService.getGroupList();
  }

  getAllUser() {
    this.users = this.userService.getUsers();
  }

  getResultList(keyword:string){
    this.users = this.userService.filerByKeyword(keyword);
  }

  delete(id:number) {
    alert("delete item")
    let newArrayAfterDelete = [];
    this.users.map(user =>{
      if(user.id != id){
        newArrayAfterDelete.push(user);
      }
    });
    this.users = newArrayAfterDelete;
  }

  search(event) {
    let search_value:string = event;
    return (search_value)? this.getResultList(event) : this.getAllUser();


  }
}
