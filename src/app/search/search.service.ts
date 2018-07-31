import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://www.omdbapi.com/';
  constructor(private http: HttpClient) { }
  search(queryString: string) {
    const _URL = this.baseUrl + '?t=' + queryString + '&apikey=6c3a2d45';
    return this.http.get(_URL);
  }
}
