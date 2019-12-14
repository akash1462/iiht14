package com.cognizant.trainingmicroservice.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.trainingmicroservice.entity.Skill;
import com.cognizant.trainingmicroservice.entity.Training;
import com.cognizant.trainingmicroservice.exception.EndDateCoincideException;
import com.cognizant.trainingmicroservice.exception.MentorSkillAlreadyExistsException;
import com.cognizant.trainingmicroservice.exception.StartDateCoincideException;
import com.cognizant.trainingmicroservice.service.TrainingService;

@RestController
public class TrainingController {

	@Autowired
	private TrainingService trainingService;
	
	@PostMapping("/trainingRequest")
	public void addTrainingRequest(@RequestBody @Valid Training training) throws StartDateCoincideException, EndDateCoincideException {
		trainingService.addTrainingRequest(training);
	}
	
	@GetMapping("/getIncompleteTraining/{userName}")
	public List<Training> getIncompleteTraining(@PathVariable String userName) {
		return trainingService.getIncompleteTraining(userName);
	}
	
	@PostMapping("/editStatus")
	public void editStatus(@RequestBody @Valid Training training){
		trainingService.editStatus(training);
	}
	
	@PostMapping("/addSkillLogin/{userName}/{yearsExperience}/{selfRating}")
	public void addSkillLogin(@RequestBody @Valid Skill skill, @PathVariable String userName, @PathVariable float yearsExperience, @PathVariable float selfRating) throws MentorSkillAlreadyExistsException{
		trainingService.addSkillLogin(skill,userName,yearsExperience,selfRating);
	}

}
