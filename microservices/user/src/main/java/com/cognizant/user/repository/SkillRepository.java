package com.cognizant.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.user.model.Skill;

public interface SkillRepository extends JpaRepository<Skill, Integer>{

}
