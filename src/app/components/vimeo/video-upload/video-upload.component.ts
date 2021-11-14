import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {VimeoVideo} from "./vimeo-video";
import {Router} from "@angular/router";
import {VideoUploadService} from "./video-upload.service";
import {usuarioSenhaIguaisValidator} from "../../../user/home/register/usuario-senha-iguais.validator";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

const API = environment.apiURL

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss']
})
export class VideoUploadComponent implements OnInit {
  public vimeoForm!: FormGroup;
  public vimeoFile!: File;

  constructor(
    private formBuilder:FormBuilder,
    private videoUpload:VideoUploadService,
    private router:Router,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.vimeoForm = this.formBuilder.group(
      {
        // title: ['', [Validators.required, Validators.minLength(4)]],
        // description: ['', [Validators.required, Validators.minLength(10)]],
        video: [''],
      },
      {
        // validators: [usuarioSenhaIguaisValidator]
      });
  }

  upload() {
    const vimeoVideo = this.vimeoForm.getRawValue() as VimeoVideo;
    vimeoVideo.video = this.vimeoFile;
    console.log(this.vimeoFile);

    // if (!this.vimeoForm.valid){
    //   return false;
    //   // const fd = new FormData();
    //   // fd.append('video', this.vimeoFile);
    // }

      return this.http.post(`${API}/vimeo/upload`, vimeoVideo, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
          console.log(event);
          // this.router.navigate([''])
        },
        error => {
          console.log(error);
        });

    // this.videoUpload.upload(vimeoVideo);
  }

  onFileSelected(event:any) {
    this.vimeoFile = <File>event.target.files[0];
    console.log(event);
    console.log(this.vimeoFile);
    // this.vimeoForm.video
  }
}
