package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.entity.PlacementManagerEntity;

public interface PlacementManagerRepository extends JpaRepository<PlacementManagerEntity, Integer>
{

}
