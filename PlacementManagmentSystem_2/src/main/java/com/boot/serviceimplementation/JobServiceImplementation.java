package com.boot.serviceimplementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.entity.JobEntity;
import com.boot.exception.ResourceNotFoundException;

import com.boot.payload.JobDTO;
import com.boot.repository.JobRepository;
import com.boot.service.JobService;

@Service
public class JobServiceImplementation implements JobService 
{
	@Autowired
    private JobRepository jobRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public JobDTO addjob(JobDTO job) {
		// TODO Auto-generated method stub
       JobEntity jobEntity = this.modelMapper.map(job, JobEntity.class);
		
		JobEntity savedJobEntity = this.jobRepository.save(jobEntity);
		
		return this.modelMapper.map(savedJobEntity, JobDTO.class);
		
	}

	@Override
	public List<JobDTO> getAlljobList() {
		// TODO Auto-generated method stub
		List<JobEntity> jobList =this.jobRepository.findAll();
		List<JobDTO> jobListDto = jobList.stream().map(job->this.modelMapper.map(job, JobDTO.class))
				.collect(Collectors.toList());
		return jobListDto;
		
	}

	@Override
	public JobDTO getJobById(int jobId) {
		// TODO Auto-generated method stub
		JobEntity jobObj = this.jobRepository
				.findById(jobId).orElseThrow(()-> new ResourceNotFoundException("job","jobId",jobId));
				return this.modelMapper.map(jobObj, JobDTO.class);
	}

	@Override
	public void deleteJobById(int jobId) {
		// TODO Auto-generated method stub
		if(this.jobRepository.existsById(jobId)) 
		{
			this.jobRepository.deleteById(jobId);
			
		}
		else
		{
			throw new ResourceNotFoundException("Job","JobId", jobId);
		}
		
	}

	@Override
	public JobDTO updateJobByID(JobDTO job, int jobId) {
		// TODO Auto-generated method stub
		if(this.jobRepository.existsById(jobId)) 
		{
	     	JobEntity jobObj = this.modelMapper.map(job,JobEntity.class);
			JobEntity updatedJob= this.jobRepository.save(jobObj);
			
			return this.modelMapper.map(updatedJob, JobDTO.class);
		}
		else
		{
			throw new ResourceNotFoundException("Job","JobId", jobId);
		}
	}

}
