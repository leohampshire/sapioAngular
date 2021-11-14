import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  user$ = this.userService.getUser();

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
  }

}
