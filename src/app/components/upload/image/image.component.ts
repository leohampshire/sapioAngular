import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {DataService} from "../data.service";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  public imageForm!: FormGroup;
  public file!: File;
  public submitted!: boolean;
  private data: any;

  constructor(
    private formBuilder:FormBuilder,
    private toastr: ToastrService,
    private router:Router,
    private http:HttpClient,
    private dataService:DataService,
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.submitted = false;
  }

  private createForm() {
    this.imageForm = this.formBuilder.group(
      {
        image: [''],
      },
      {});
  }

  upload() {
    this.submitted = true;

    if (this.imageForm.invalid){
      return;
    }

    const formData = new FormData;
    formData.append("image", this.file, this.file.name);

    this.dataService.uploadData(formData).subscribe(res => {
      this.data = res;
      console.log(this.data);

      if (this.data.status == true) {
        this.toastr.success(JSON.stringify(this.data.message), '', {
          timeOut:4000,
          progressBar: true
        })
      } else {
        this.toastr.error(JSON.stringify(this.data.message), '', {
          timeOut:4000,
          progressBar: true
        })
      }

      this.submitted = false;
      this.imageForm.get('image')?.reset();
    });
  }

  get f() {
    return this.imageForm.controls;
  }

  uploadImage(event: any) {
    this.file = <File>event.target.files[0];
    console.log(this.file);
  }
}
