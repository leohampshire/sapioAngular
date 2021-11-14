import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-vimeo',
  templateUrl: './vimeo.component.html',
  styleUrls: ['./vimeo.component.scss']
})
export class VimeoComponent implements OnInit {
  vimeoForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
