import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../site/user';
import { Observable } from 'rxjs';
import { Mentor } from '../site/mentor';
import { Skill } from '../site/Skill';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.baseUrl ;
  mentor:Mentor = null;
 
  users = [  ];

  constructor(private router: Router, private _httpClient: HttpClient) { }



  addUser(user: User): Observable<any> {
    console.log("Inside add user of service ")
    return this._httpClient.post<any>(this.url + "user-service/signUp", user)
    this.router.navigate(['login']);
  }

  addMentor(mentor:Mentor):Observable<any> {
    return this._httpClient.post(this.url + "user-service/addMentor", mentor)
  }

  findMentorBySkill(skill:Skill):Observable<any> {
    return this._httpClient.post(this.url+"search-service/skillbasedmentor",skill);
  }

  
}
