import {Component, OnInit} from '@angular/core';
import {UserService} from '../../user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  users;

  userFilter = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  searchvalue: string ;

  searchName(event) {
    this.searchvalue = event.target.value;
    console.log(this.searchvalue);
    this.userFilter = (this.searchvalue) ? this.userService.filerByKeyword(this.searchvalue) : this.users;
  }


}
