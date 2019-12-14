import { User } from './user';

export interface Mentor {
    id: number;
    linkedinUrl: String;
    yearsOfExperience: number;
    timeslot: String;
    user: User;
}
