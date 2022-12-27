package com.boot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.boot.entity.ApplyJobEntity;
import com.boot.entity.StudentEntity;

public interface ApplyJobRepository extends JpaRepository<ApplyJobEntity,Integer>
{
	List<ApplyJobEntity> findByStudent(StudentEntity student);
	 
	 
    @Query(value="select * from apply_jobs_entity aj where aj.sid=:studentId",nativeQuery =true)
    List<ApplyJobEntity> getAllApplyJobByStudentId(@Param("studentId") int studentId);
	
    @Query(value="select * from apply_jobs_entity aj where aj.jid=:jobId",nativeQuery =true)
    List<ApplyJobEntity> getAllApplyJobByJobId(@Param("jobId") int jobId);
	
}
