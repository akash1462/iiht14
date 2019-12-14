package com.cognizant.search.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.search.model.Mentor_Skills;
import com.cognizant.search.model.Skill;

public interface MentorSkillRepository  extends JpaRepository<Mentor_Skills, Integer> {
	
	List<Mentor_Skills> findAllBySkill(Skill skill);

}
