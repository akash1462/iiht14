package com.cognizant.user.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.user.model.Mentor;
import com.cognizant.user.model.Mentor_Skills;

public interface MentorSkillRepository  extends JpaRepository<Mentor_Skills, Integer> {
	
	List<Mentor_Skills> findAllByMentor(Mentor mentor);

}
