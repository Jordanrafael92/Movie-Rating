package com.jordansilva.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jordansilva.dsmovie.entities.Score;
import com.jordansilva.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
