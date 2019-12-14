import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSignupComponent } from './site/user-signup/user-signup.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './site/login/login.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SearchComponent } from './search/search.component';
import { MentorHomeComponent } from './mentor-home/mentor-home.component';
import { EditSkillComponent } from './edit-skill/edit-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    LoginComponent,
    MentorDetailsComponent,
    AddSkillComponent,
    SearchComponent,
    MentorHomeComponent,
    EditSkillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
