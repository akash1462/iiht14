import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillService } from '../service/skill.service';
import { Skill } from '../site/Skill';
import { Mentor_Skills } from '../site/Mentor_Skills';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private skillService: SkillService, private userService: UserService) { }
  signupForm: FormGroup;
  skillList: Skill[] = [];


  ngOnInit() {
    this.buildsignupForm()
    this.skillList = [];
    this.skillService.getAllSkills().subscribe(data => {
      this.skillList = data;
    })
  }

  buildsignupForm() {
    this.signupForm = this.fb.group({
      skill: ['', [
        Validators.required
      ]],
      selfRating: ['', [
        Validators.required,
        Validators.max(10)]],
      yearsOfExperience: ['', [
        Validators.required]],
    })
  }
  get skill() {
    return this.signupForm.get('skill');
  }
  get selfRating() {
    return this.signupForm.get('selfRating');
  }
  get yearsOfExperience() {
    return this.signupForm.get('yearsOfExperience');
  }

  addSkill(signupForm: any) {
    let mentorSkill: Mentor_Skills = {
      mentor: this.skillService.mentor, selfRating: signupForm['selfRating'], timeslot:signupForm['timeslot'],yearsOfExperience: signupForm['yearsOfExperience'],
      skill: this.skillList.find(skill => skill.name == signupForm["skill"])
    }
    this.skillService.addMentorSkill(mentorSkill).subscribe(data => {
      this.buildsignupForm();
    })


  }

}
