package com.linkgamein.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.linkgamein.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	//Método para consultar usuario por email
	@Query ("SELECT u FROM User u WHERE u.email=?1")
	User getByEmail (String email);
	//Método para consultar usuario por email
	@Query ("SELECT u FROM User u WHERE u.password=?1")
	User getByPassword (String password);
	
	Optional<User> findByEmail (String email);
	
}
