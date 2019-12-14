package com.cognizant.user.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.user.model.Mentor;
import com.cognizant.user.model.Mentor_Skills;
import com.cognizant.user.model.User;
import com.cognizant.user.repository.MentorRepository;
import com.cognizant.user.repository.MentorSkillRepository;
import com.cognizant.user.repository.UserRepository;

@Service
public class AppMentorDetailsService {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(AppMentorDetailsService.class);

	@Autowired
	MentorRepository mentorRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	MentorSkillRepository mentorSkillRepository;

	public AppMentorDetailsService(MentorRepository mentorRepository) {
		super();
		this.mentorRepository = mentorRepository;
	}

	public void addMentorDetails(Mentor newMentor) {
		System.out.println(newMentor);
		User user = userRepository.findByUserName(newMentor.getUser().getUserName());
		newMentor.setUser(user);
		mentorRepository.save(newMentor);
	}
	
	
	@Transactional
	public void addMentorSkill(@Valid Mentor_Skills mentorSkill) {
		Mentor mentor = mentorRepository.findByLinkedinUrl(mentorSkill.getMentor().getLinkedinUrl());
		mentorSkill.setMentor(mentor);
		mentorSkillRepository.save(mentorSkill);
	}
	
}
