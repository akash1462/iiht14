import { Mentor } from './Mentor';
import { Skill } from './Skill';

export interface Mentor_Skills {
    mentor:Mentor,
    skill:Skill,
    selfRating:number,
    yearsOfExperience:number,
    timeslot:String
}