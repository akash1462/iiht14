//package com.cognizant.user;
//
//import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Size;
//
//import org.junit.jupiter.api.Assertions;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.cognizant.user.exception.UserAlreadyExistsException;
//import com.cognizant.user.model.Mentor;
//import com.cognizant.user.model.User;
//import com.cognizant.user.repository.UserRepository;
//import com.cognizant.user.service.AppUserDetailsService;
//
//@SpringBootTest
//class UserApplicationTests {
//
//	@Autowired
//	private UserRepository userRepository;
//
//	@Autowired
//	private AppUserDetailsService appUserDetailsService;
//	
//	@Test
//	public void signUpValidTest() throws UserAlreadyExistsException {
//		User user = new User(0L,"akashhh@gmail.com", "pass", "akash", "sharma","123121212" , "123", "User", false, null);
//		appUserDetailsService.signup(user);
//		Assertions.assertEquals(user.toString(), userRepository.findById(user.getId()).get().toString());
//		deleteUserTest(user);
//	}
//	
//	void deleteUserTest(User user) {
//		userRepository.delete(user);
//		Assertions.assertEquals(false, userRepository.findById(user.getId()).isPresent());
//	}
//
//}
