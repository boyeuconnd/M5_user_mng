import { Component, OnInit } from '@angular/core';
import {IGroup} from './IGroup/igroup';

@Component({
  selector: 'app-group-mng',
  templateUrl: './group-mng.component.html',
  styleUrls: ['./group-mng.component.css']
})
export class GroupMngComponent implements OnInit {

  listGroup: IGroup[] = [
    {
      name: 'Admin'
    },
    {
      name: 'Customer'
    },
    {
      name: 'Staff'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }



}
