package com.cognizant.user.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.user.model.Skill;
import com.cognizant.user.service.SkillService;

@RestController
public class SkillController {
	
	@Autowired
	private SkillService skillService;
	
	@GetMapping("/skills")
	public List<Skill> getAllSkills() {
		return skillService.getAllSkills();
	}
}
