package com.cognizant.user.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="mentor")
public class Mentor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "me_id")
	private Long id;
	
	@Column(name="linkedin_url")
	private String linkedinUrl = null;
	
	@Column(name = "years_of_experience")
	private Float yearsOfExperience;
	
	@Column(name="mentor_timeslot")
	private String timeslot;
	
	@OneToOne
    @JoinColumn
    private User user;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getLinkedinUrl() {
		return linkedinUrl;
	}

	public void setLinkedinUrl(String linkedinUrl) {
		this.linkedinUrl = linkedinUrl;
	}

	public String getTimeslot() {
		return timeslot;
	}

	public void setTimeslot(String timeslot) {
		this.timeslot = timeslot;
	}

	public Float getYearsOfExperience() {
		return yearsOfExperience;
	}

	public void setYearsOfExperience(Float yearsOfExperience) {
		this.yearsOfExperience = yearsOfExperience;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	@Override
	public String toString() {
		return "Mentor [id=" + id + ", linkedinUrl=" + linkedinUrl + ", yearsOfExperience=" + yearsOfExperience
				+ ", user=" + user + "]";
	}

}
