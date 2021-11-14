import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient:HttpClient,
  ) { }

  uploadData(data: FormData) {
    const headers = new HttpHeaders()
    return this.httpClient.post(`${API}/file`, data, {
      headers: headers
    });
  }
}
