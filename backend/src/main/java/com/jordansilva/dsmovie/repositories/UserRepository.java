package com.jordansilva.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jordansilva.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{

	User findByEmail(String email);
}
