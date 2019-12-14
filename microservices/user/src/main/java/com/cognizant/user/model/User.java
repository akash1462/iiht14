package com.cognizant.user.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "us_id")
	private long id;

	@NotNull
	@Column(name = "user_name")
	@Size(max=45,min=10)
	private String userName;

	@Column(name = "password")
	@Size(max=100,min=3)
	private String password;

	@Column(name = "first_name")
	@Size(max=45,min=3)
	private String firstName;

	@Column(name = "last_name")
	@Size(max=45,min=3)
	private String lastName;

	@Column(name = "contact_number")
	private String contactNumber;

	@Column(name = "reg_code")
	private String regCode = "";

	@Column(name = "role")
	private String role = null;

	@Column(name = "reset_password")
	private Boolean resetPassword = false;

	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
	private Mentor mentors;

	public User(){
		
	};
	
	public User(long id, @NotNull @Size(max = 45, min = 10) String userName, @Size(max = 100, min = 3) String password,
			@Size(max = 45, min = 3) String firstName, @Size(max = 45, min = 3) String lastName, String contactNumber,
			String regCode, String role, Boolean resetPassword, Mentor mentors) {
		super();
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNumber = contactNumber;
		this.regCode = regCode;
		this.role = role;
		this.resetPassword = resetPassword;
		this.mentors = mentors;
	}

	public void setMentors(Mentor mentors) {
		this.mentors = mentors;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRegCode() {
		return regCode;
	}

	public void setRegCode(String regCode) {
		this.regCode = regCode;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public Boolean getResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", firstName=" + firstName
				+ ", lastName=" + lastName + ", contactNumber=" + contactNumber + ", regCode=" + regCode + ", role="
				+ role + ", resetPassword=" + resetPassword + "]";
	}

	

}
