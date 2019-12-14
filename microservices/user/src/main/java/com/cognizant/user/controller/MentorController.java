package com.cognizant.user.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.user.model.Mentor;
import com.cognizant.user.model.Mentor_Skills;
import com.cognizant.user.repository.MentorRepository;
import com.cognizant.user.service.AppMentorDetailsService;

@RestController
public class MentorController {

	
	@Autowired
	MentorRepository mentorRepository;
	
	@Autowired
	AppMentorDetailsService appMentorDetailsService;
	
	@PostMapping("/addMentor")
	public void addMentorDetails(@RequestBody @Valid Mentor newMentor) {
		appMentorDetailsService.addMentorDetails(newMentor);
	}
	

	@PostMapping("/addMentorSkill")
	public void addMentorSkill(@RequestBody @Valid Mentor_Skills mentorSkill){
		appMentorDetailsService.addMentorSkill(mentorSkill);
	}
}
	