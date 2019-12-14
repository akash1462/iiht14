import { Component, OnInit } from '@angular/core';
import { Mentor_Skills } from '../site/Mentor_Skills';
import { Skill } from '../site/Skill';
import { SkillService } from '../service/skill.service';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TrainingService } from '../service/training.service';
import { Training } from '../site/training';
import { User } from '../site/user';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  skillList: Skill[];
  SearchKey: string;
  mentorList: Mentor_Skills[];
  extraDetails: number = null;
  user: User;
  switch:boolean = false;

  requestTrainingMentorId:number = null;
  requestTrainingForm:FormGroup;
  errorMessage:string=null;

  constructor(private skillService: SkillService, private userService: UserService, private authService: AuthenticationService, private formBuild: FormBuilder, private trainingService: TrainingService) { }

  ngOnInit() {

    this.extraDetails = null;
    this.SearchKey = null;
    this.skillList = [];
    this.skillService.getAllSkills().subscribe(
      (data) => {
        this.skillList = data;
      },
      (error) => {
        console.log(error);
      }
    )

    this.authService.getUser().subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      }
    )

  }
  searchBySkill() {
    let skill: Skill = this.skillList.find(skill => skill.name == this.SearchKey)
    this.userService.findMentorBySkill(skill).subscribe(
      (data) => {
        this.mentorList = data;
      },
      (error) => {
        console.log(error);

      }
    )
  }

  moreDetails(mentorId: number) {
    this.extraDetails = mentorId;
  }



  requestTraining(mentorId:number) {
    this.user;
    this.requestTrainingMentorId = mentorId;
    this.switch = true;
    this.requestTrainingForm = this.formBuild.group({
      startDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.startAfterEnd.bind(this)
      ]],
      endDate: ['',[
        Validators.required,
        this.dateToday.bind(this),
        this.endBeforeStart.bind(this)
      ]]
    })
  }

  get startDate(){
    return this.requestTrainingForm.get('startDate');
  }

  get endDate(){
    return this.requestTrainingForm.get('endDate');
  }

  // to check 
  dateToday(formControl: FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let date:Date = new Date(formControl.value);
        let currentDate = new Date();        
        if ( date < currentDate ) {
          return { 'nomatch': true };
        }
      }
    }
    return null;
  }

  endBeforeStart(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let endDate:Date = new Date(formControl.value);
        let startdate = new Date(this.requestTrainingForm.get('startDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }

  startAfterEnd(formControl:FormControl): { [s: string]: boolean } {
    if (this.requestTrainingForm) {
      if (formControl.value){
        let startdate:Date = new Date(formControl.value);
        let endDate = new Date(this.requestTrainingForm.get('endDate').value);            
        if ( startdate > endDate ) {
          return { 'nomatch1': true };
        }
      }
    }
    return null;
  }

  submitRequestTraining(formData:any,mentorSkill:Mentor_Skills) {
    let trainingDetails:Training = {id:null,mentor:mentorSkill.mentor,endDate:formData["endDate"],progress:0,rating:null,
    skill:mentorSkill.skill,startDate:formData["startDate"],status:"Request Pending",user:this.user}
    this.trainingService.sendTrainingRequest(trainingDetails).subscribe(
      (data)=>{
        window.alert("Your details are submitted successfully");
      },
      (error)=>{
        console.log(error);
        if (error.error.message == "Start Date Coincides with an existing approved training of Mentor") {
          this.errorMessage = "Start Date Coincides with an existing approved training of Mentor";
        }
        else if (error.error.message == "End Date Coincides with an existing approved training of Mentor") {
          this.errorMessage = "End Date Coincides with an existing approved training of Mentor";
        }
        else if (error.error.message == "Start Date Coincides with an existing approved training of User") {
          this.errorMessage = "Start Date Coincides with an existing approved training of User";
        }
        else if (error.error.message == "End Date Coincides with an existing approved training of User") {
          this.errorMessage = "End Date Coincides with an existing approved training of User";
        }
      }
    )
  }


}
