package com.jordansilva.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jordansilva.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
