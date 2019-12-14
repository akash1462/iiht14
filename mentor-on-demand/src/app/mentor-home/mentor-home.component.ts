import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../service/training.service';
import { Training } from '../site/training';

@Component({
  selector: 'app-mentor-home',
  templateUrl: './mentor-home.component.html',
  styleUrls: ['./mentor-home.component.css']
})
export class MentorHomeComponent implements OnInit {

  trainingList:any;

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
    this.getTrainingData();

  }

  getTrainingData() {
    this.trainingService.getIncompleteTraining().subscribe(
      (data)=>{
        this.trainingList = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  acceptRequest(training:Training) {
    training.status = "Accepted";
    this.trainingService.changeStatus(training).subscribe(
      (data)=>{
        window.alert("\Training Request Accepted ");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  declineRequest(training:Training){
    training.status = "Denied";
    this.trainingService.changeStatus(training).subscribe(
      (data)=>{
        window.alert("Training Request Declined");
        this.getTrainingData();
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
