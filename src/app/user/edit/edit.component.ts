import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GroupService} from '../../core/group-mng/service/group.service';
import {IGroup} from '../../core/group-mng/IGroup/igroup';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IUser} from '../IUser/iuser';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  titlePage:string = 'Edit user info'

  editUserForm: FormGroup;
  editUserId:string;
  editUser:IUser;



  constructor(private formBuilder: FormBuilder,
              private groupService: GroupService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.editUserId = paramMap.get('id');
      this.editUser = this.userService.getUserById(+this.editUserId)

    });
  }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group(
      {
        id: [this.editUserId],
        name: [this.editUser.name,[Validators.required,Validators.minLength(4)]],
        email: [this.editUser.email,[Validators.required,Validators.email]],
        group_id: [this.editUser.group_id]
      }
    );
  }


  groupList: IGroup[] = this.groupService.getGroupList();

  get name(){
    return this.editUserForm.get('name')
  }

  get email(){
    return this.editUserForm.get('email');
  }



}
