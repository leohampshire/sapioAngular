import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  pageName = '';

  user$ = this.userService.getUser();

  constructor(private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logOut();
    this.router.navigate(['']);
  }

}
