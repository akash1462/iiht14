import { Component, OnInit } from '@angular/core';
import { Skill } from '../site/Skill';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SkillService } from '../service/skill.service';
import { TrainingService } from '../service/training.service';
import { UserService } from '../service/user.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skillForm: FormGroup;
  skillList: Skill[] = [];
  errorMessage: string = null;

  constructor(private skillService:SkillService, private formBuild: FormBuilder, private trainingService:TrainingService, private authService:AuthenticationService) { }

  ngOnInit() {
    
    this.errorMessage = null;
    this.buildSkillForm()
    this.skillList = [];
    this.skillService.getAllSkills().subscribe(
      (data) => {
        this.skillList = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  buildSkillForm() {
    this.skillForm = this.formBuild.group({
      skill: ['', [
        Validators.required
      ]],
      selfRating: ['', [
        Validators.required,
        Validators.max(10),
        Validators.min(0)
      ]],
      yearsExperience: ['', [
        Validators.required,
        Validators.min(0),

      ]],
    })
  }
  get skill() {
    return this.skillForm.get('skill');
  }
  get selfRating() {
    return this.skillForm.get('selfRating');
  }
  get yearsExperience() {
    return this.skillForm.get('yearsExperience');
  }
  addSkill(formData:any) {
    let skill:Skill = this.skillList.find(skill => skill.name == formData["skill"]);
    let yearsExperience:number = formData["yearsExperience"];
    let selfRating:number = formData["selfRating"];
    this.trainingService.addMentorSkillAfterLogin(skill,this.authService.username,yearsExperience,selfRating).subscribe(
      (data) => {
        window.alert("Your details are submitted successfully");
        this.buildSkillForm();
      },
      (error) => {
        console.log(error);
        if (error.error.message == "This skill exists for this mentor") {
          this.errorMessage = "This skill exists for this mentor";
        }
      }
    );
  }

}
