import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user$ = this.userService.getUser();

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
  }

}
