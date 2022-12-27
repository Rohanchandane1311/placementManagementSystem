package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.entity.JobEntity;
public interface JobRepository extends JpaRepository<JobEntity, Integer> {

}
