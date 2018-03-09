import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ImageapiService {

  constructor(protected httpClient: HttpClient) { }

  getGettyImages() {
    const httpOptions = {
      headers: new HttpHeaders ({
      'Content-Type': 'application/jason',
        'Api-key:': environment.gettyKey
    })
  };
    const gettyUrl = 'https://api.gettyimages.com/v3/search/images?phrase=dog';
    return this.httpClient.get(gettyUrl, httpOptions);
    
    //httpClientModule.get(gettyUrl, httpOptions);
  }}