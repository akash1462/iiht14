import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Mentor } from '../site/mentor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor_Skills } from '../site/Mentor_Skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url: string = environment.baseUrl ;

  mentor:Mentor = null;

  constructor(private http:HttpClient) { }

  getAllSkills(): Observable<any> {
    return this.http.get(this.url+"user-service/skills");
  }
  
  addMentorSkill(mentorSkill:Mentor_Skills):Observable<any> {
    return this.http.post(this.url+"user-service/addMentorSkill", mentorSkill);
  }


}
