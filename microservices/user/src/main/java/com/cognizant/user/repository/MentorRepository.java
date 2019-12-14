package com.cognizant.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.user.model.Mentor;

public interface MentorRepository extends JpaRepository<Mentor, Integer>{

	Mentor findByLinkedinUrl(String LinkedinUrl);
	
}
