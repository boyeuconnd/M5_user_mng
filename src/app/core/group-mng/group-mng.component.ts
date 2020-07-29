import { Component, OnInit } from '@angular/core';
import {IGroup} from './IGroup/igroup';
import {GroupService} from './service/group.service';

@Component({
  selector: 'app-group-mng',
  templateUrl: './group-mng.component.html',
  styleUrls: ['./group-mng.component.css']
})
export class GroupMngComponent implements OnInit {


  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
  }

  groupList:IGroup[] = this.groupService.getGroupList();


}
