package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.entity.CompanyEntity;

public interface CompanyRepository  extends JpaRepository<CompanyEntity, Integer> {

}
