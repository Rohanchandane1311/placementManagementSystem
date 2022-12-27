package com.boot.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.payload.ApplyJobDTO;
import com.boot.service.ApplyJobService;


@RestController
@RequestMapping("/applyJob")
@CrossOrigin("*")
public class ApplyJobController 
{
	@Autowired
	 private ApplyJobService applyJobService;
	
	@PostMapping("/addJob")
	public ResponseEntity<ApplyJobDTO> applyJob(@Valid @RequestBody ApplyJobDTO applyJobDTO)
	{
		ApplyJobDTO applyJob =this.applyJobService.addJob(applyJobDTO);
	    return new ResponseEntity<ApplyJobDTO>(applyJobDTO,HttpStatus.CREATED);
	}
 
	
	@GetMapping("/")
	public ResponseEntity<List<ApplyJobDTO>> getAllApplyJobs()
	{
		
		List<ApplyJobDTO> applyjobList = this.applyJobService.getAllApplyJob();
		return new ResponseEntity<List<ApplyJobDTO>>(applyjobList,HttpStatus.OK);
		
  }
	
	@GetMapping("/{applyJobId}")
	public ResponseEntity<ApplyJobDTO> getApplyJobById(@PathVariable("applyJobId") int applyJobId)
	{
		ApplyJobDTO  applyjob = this.applyJobService.getApplyJobById(applyJobId);
		return new ResponseEntity<ApplyJobDTO>(applyjob,HttpStatus.OK);
	}
  
	
	@GetMapping("/student/{studentId}")
	public ResponseEntity<List<ApplyJobDTO>>getAllApplyJobsByStudentId(@PathVariable("studentId") int studentId)
	{
		List<ApplyJobDTO> applyJobList= this.applyJobService.getApplyJobByStudentId(studentId);
	   return new ResponseEntity<List<ApplyJobDTO>>(applyJobList,HttpStatus.OK);	
	}


	@GetMapping("/job/{jobId}")
	public ResponseEntity<List<ApplyJobDTO>>getAllApplyJobsByjobId(@PathVariable("jobId") int jobId)
	{
		List<ApplyJobDTO> applyJobList= this.applyJobService.getApplyJobByJobId(jobId);
	   return new ResponseEntity<List<ApplyJobDTO>>(applyJobList,HttpStatus.OK);	
	}

	
}
