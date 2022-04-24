import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  getAllPeopleDetails() {
    return this.httpClient.get('https://swapi.dev/api/people');
  }

  getFilmsData(films_api) {
    films_api = films_api.map(f => this.httpClient.get(f));
    return forkJoin(films_api);
  }
}
