package com.boot.service;

import java.util.List;

import com.boot.payload.JobDTO;

public interface JobService
{
	  public JobDTO addjob(JobDTO job);
	  
	  public List<JobDTO> getAlljobList();
	  
	  public JobDTO getJobById(int jobId);
	  
	  public void deleteJobById(int jobId);
	  
	  public JobDTO updateJobByID(JobDTO job, int jobId);
	 
}
