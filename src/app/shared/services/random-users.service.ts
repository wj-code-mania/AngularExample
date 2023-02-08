import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { RandomUser } from '../models/random-user';
import { RandomUserResponse } from '../models/random-user-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class RandomUsersService {
  randomUserURL = 'https://randomuser.me/api/';
  constructor(
    private http: HttpClient,
  )
  { 

  }

  getRandomUser(): Observable<RandomUser[]> {
    return this.http.get<RandomUserResponse>(this.randomUserURL)
    .pipe(
      map((res: RandomUserResponse) => res.results)
    )
  }
}
