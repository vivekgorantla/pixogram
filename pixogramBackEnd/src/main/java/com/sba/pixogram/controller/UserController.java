package com.sba.pixogram.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sba.pixogram.entity.Login;
import com.sba.pixogram.entity.User;
import com.sba.pixogram.repository.LoginRepository;
import com.sba.pixogram.repository.UserRepository;
import com.sba.pixogram.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

	@Autowired
	UserService userService;
	
	List<User> lu = new ArrayList<User>();
	
	@GetMapping(path = "/user")
	public List<Login> getUsers() {
		return userService.getUsersList();
	}

	@GetMapping(path = "/users/{userId}")
	public List<Login> getUsers(@PathVariable Long userId) {
		return userService.getUsers(userId);
	}

	@PostMapping(path = "/user/create")
	public User createUser(@RequestBody User user) {
		User _user = userService.createUser(user);
		Login login=new Login(user.getFirstname(),user.getLastname(),user.getUsername(),user.getPassword(),user.getEmail());
		userService.createlogin(login);
		return _user;
	}

	@GetMapping(path = "/user/{userId}")
	public User getUserById(@PathVariable Long userId) {
		User u=userService.getUserById(userId);
		User u1=new User();
		u1.setEmail(u.getEmail());
		u1.setId(u.getId());
		u1.setFirstname(u.getFirstname());
		u1.setLastname(u.getLastname());
		u1.setUsername(u.getUsername());
		u1.setPassword(u.getPassword());
		return u1; 
	}
	
	@PutMapping(path = "/user/{userId}/{password}")
	public void UpdateUser(@PathVariable Long userId,@PathVariable String password) {
		userService.UpdateUser(userId, password);	
	}
}
