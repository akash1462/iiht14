import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { LoginComponent } from './site/login/login.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SearchComponent } from './search/search.component';
import { MentorHomeComponent } from './mentor-home/mentor-home.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';


const routes: Routes = [
  { path: 'signup', component: UserSignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mentordetails', component: MentorDetailsComponent },
  { path: 'addSkill', component: AddSkillComponent },
  { path: 'search', component: SearchComponent },
  { path: 'mentorHome', component: MentorHomeComponent },
  { path: 'editSkill', component:EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
