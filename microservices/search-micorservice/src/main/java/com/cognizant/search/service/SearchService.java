package com.cognizant.search.service;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.search.model.Mentor_Skills;
import com.cognizant.search.model.Skill;
import com.cognizant.search.repository.MentorSkillRepository;

@Service
public class SearchService {
	@Autowired
	private MentorSkillRepository mentorSkillRepository;

	@Transactional
	public List<Mentor_Skills> searchMentorBySkill(@Valid Skill skill) {
		return mentorSkillRepository.findAllBySkill(skill);
	}
}
