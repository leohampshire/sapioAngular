import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 user$ = this.userService.getUser();

  constructor(
    private userService: UserService,
    ) {  }

  ngOnInit(): void {
  }

}
