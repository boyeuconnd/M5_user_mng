import { Injectable } from '@angular/core';
import {IGroup} from '../IGroup/igroup';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private listGroup: IGroup[] = [
    {
      id: 1,
      name: 'Admin'
    },
    {
      id: 2,
      name: 'Customer'
    },
    {
      id: 3,
      name: 'Staff'
    }

  ]

  constructor() { }

  getGroupList(){
    return this.listGroup
  }
}
