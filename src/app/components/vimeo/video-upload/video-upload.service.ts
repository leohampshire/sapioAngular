import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VimeoVideo} from "./vimeo-video";
import {environment} from "../../../../environments/environment";

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  constructor(private http:HttpClient) {}

  upload(vimeoVideo: FormData) {
    console.log(vimeoVideo);

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
  }
}
