import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../user.service';
import {Router} from '@angular/router';
import {GroupService} from '../../../core/group-mng/service/group.service';
import {IGroup} from '../../../core/group-mng/IGroup/igroup';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(private formBuilder:FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      group_id:['2']
    })
  }

  groupList:IGroup[] = this.groupService.getGroupList();



  createNewUser() {
    let newUser = this.newUserForm.value;
    this.userService.add(newUser);
    this.router.navigate(['user'])
    // console.log(this.userService.getUsers())

  }

  get name(){
    return this.newUserForm.get('name')
  }

  get email(){
    return this.newUserForm.get('email');
  }
}
