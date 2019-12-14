package com.cognizant.trainingmicroservice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.trainingmicroservice.entity.Mentor;
import com.cognizant.trainingmicroservice.entity.Mentor_Skills;

public interface MentorSkillRepository extends JpaRepository<Mentor_Skills, Long> {
	List<Mentor_Skills> findAllByMentor(Mentor mentor);

}
