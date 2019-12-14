package com.cognizant.user.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.user.model.Skill;
import com.cognizant.user.repository.SkillRepository;

@Service
public class SkillService {
	
	@Autowired
	private SkillRepository skillRepository;
	
	@Transactional
	public List<Skill> getAllSkills() {
		return skillRepository.findAll();
	}
}
