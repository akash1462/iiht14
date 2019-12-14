package com.cognizant.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cognizant.authservice.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserName(String username);

//	@Query("SELECT u.menuItems from User u WHERE u.username=?1")
//	List<MenuItem> getMenuItems(String username);
//
//	@Query(value = "select sum(me_price) from menu_item where me_id in(select ct_pr_id from cart where ct_us_id=(select us_id from user where us_username= :username))", nativeQuery = true)
//	public double getCartTotal(@Param(value = "username") String username);

}
