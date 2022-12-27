package com.boot.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.exception.ApiResponse;
import com.boot.payload.JobDTO;
import com.boot.service.JobService;

@RestController
@RequestMapping("/job")
@CrossOrigin("*")
public class JobController 
{
	@Autowired
	private JobService jobService;
	
	@PostMapping// end point to add new record
	@RequestMapping(value="/",method=RequestMethod.POST)//end point or mapping method
	public ResponseEntity<JobDTO> addJob(@Valid @RequestBody JobDTO job)
	{
		//ResponseEntity
	
		JobDTO addJob = this.jobService.addjob(job);
		
		
   
		return new ResponseEntity<JobDTO>(addJob,HttpStatus.CREATED);
		//return addCompany;
		
	}
	
	@GetMapping("/")//end point to featch all student record
	public ResponseEntity<List<JobDTO>> getAllJobs()
	{
		List<JobDTO> alljobList = this.jobService.getAlljobList();
		return new ResponseEntity<List<JobDTO>>(alljobList,HttpStatus.OK);
		
   }
   
	@GetMapping("/{jobId}")
	public ResponseEntity<JobDTO> getJob(@PathVariable("jobId") int jobId)
	{
		JobDTO jobObj = this.jobService.getJobById(jobId);
		return new ResponseEntity<JobDTO>(jobObj,HttpStatus.OK);
	}
	
	@PutMapping("/{jobId}")
	public ResponseEntity<JobDTO> updateJobById(@Valid @RequestBody JobDTO job,@PathVariable("jobId") int jobId)
	{
		JobDTO updatedJob = this.jobService.updateJobByID(job, jobId);
		return new ResponseEntity<JobDTO>(updatedJob,HttpStatus.OK);
	}

	@DeleteMapping("/{jobId}")
	public ResponseEntity<ApiResponse> deleteJob(@PathVariable("jobId") int jobId)
	{
		this.jobService.deleteJobById(jobId);
		
		ApiResponse response = new ApiResponse();//api is used to handle custum message 
		
		response.setMessage("Job record deleted jobId "+jobId);
		response.setStatus(true);
		
		return new ResponseEntity<ApiResponse>(response,HttpStatus.OK);
		
		
	}

}
