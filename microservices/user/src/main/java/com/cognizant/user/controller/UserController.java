package com.cognizant.user.controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.user.exception.UserAlreadyExistsException;
import com.cognizant.user.model.User;
import com.cognizant.user.repository.UserRepository;
import com.cognizant.user.service.AppUserDetailsService;

@RestController
public class UserController {

	@Autowired
	AppUserDetailsService appUserDetailsService;
	
	@Autowired
	UserRepository userRepository;

	@PostMapping("/signUp")
	public void signup(@RequestBody @Valid User newUser) throws UserAlreadyExistsException {
		appUserDetailsService.signup(newUser);
	}
	
	@GetMapping("/signUp")
	public List<User> test(){
		return userRepository.findAll();
	}
	

	@GetMapping("/findUser/{userName}")
	public User getAllSkills(@PathVariable String userName) {
		return appUserDetailsService.getUserByUserName(userName);
	}
	
	
}
