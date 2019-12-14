import { Injectable } from '@angular/core';
import { Training } from '../site/training';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Skill } from '../site/Skill';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  url: string = environment.baseUrl ;

  constructor(private _httpClient:HttpClient, private authService:AuthenticationService) { }

  sendTrainingRequest(training:Training):Observable<any> {
    return this._httpClient.post(this.url+"training-service/trainingRequest",training);
  }


  getIncompleteTraining():Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this._httpClient.get(this.url + "training-service/getIncompleteTraining/"+this.authService.username+"/", {headers});
  }

  changeStatus(training:Training):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this._httpClient.post(this.url + "training-service/editStatus/", training, {headers});
  }

  addMentorSkillAfterLogin(skill:Skill,userName:string,yearsExperience:number,selfRating:number):Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this._httpClient.post(this.url + "training-service/addSkillLogin/"+userName+"/"+yearsExperience+"/"+selfRating+"/", skill, {headers});
  }
}
