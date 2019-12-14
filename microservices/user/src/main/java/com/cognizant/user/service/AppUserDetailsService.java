package com.cognizant.user.service;

import javax.transaction.Transactional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.user.exception.UserAlreadyExistsException;
import com.cognizant.user.model.User;
import com.cognizant.user.repository.UserRepository;
import com.cognizant.user.security.AppUser;

@Service
public class AppUserDetailsService implements UserDetailsService {

	private static final Logger LOGGER = LoggerFactory.getLogger(AppUserDetailsService.class);

	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUserName(username);
		
		if (user == null) {
			throw new UsernameNotFoundException("User not found!");
		} else{
			AppUser appUser = new AppUser(user);
			LOGGER.info("userDetails :" + appUser);
			return appUser;
		}

	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public void signup(User newUser) throws UserAlreadyExistsException {
		System.out.println("abcd");
		LOGGER.info("NEW USER IS: " + newUser);
		User user = userRepository.findByUserName(newUser.getUserName());
		if (user != null) {
			throw new UserAlreadyExistsException();
		} else {
			BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
			String encodedPassword = bCryptPasswordEncoder.encode(newUser.getPassword());
			newUser.setPassword(encodedPassword);
			userRepository.save(newUser);
		}

	}
	
	@Transactional
	public User getUserByUserName(String userName) {
		return userRepository.findByUserName(userName);
	}


}
