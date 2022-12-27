package com.boot.service;

import java.util.List;

import com.boot.payload.ApplyJobDTO;



public interface ApplyJobService 
{
	public ApplyJobDTO addJob(ApplyJobDTO applyjob);
	
	public List<ApplyJobDTO> getAllApplyJob();
	
	public  ApplyJobDTO getApplyJobById(int applyJobId);

	public  List<ApplyJobDTO> getApplyJobByStudentId(int studentId);
	
	public List<ApplyJobDTO> getApplyJobByJobId(int jobId);
	

}
