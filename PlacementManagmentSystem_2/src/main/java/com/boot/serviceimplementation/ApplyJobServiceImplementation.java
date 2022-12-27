package com.boot.serviceimplementation;

import java.util.List;
import java.util.stream.Collectors;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.boot.entity.ApplyJobEntity;
import com.boot.exception.ResourceNotFoundException;
import com.boot.payload.ApplyJobDTO;
import com.boot.repository.ApplyJobRepository;
import com.boot.repository.JobRepository;
import com.boot.repository.StudentRepository;
import com.boot.service.ApplyJobService;

@Service
public class ApplyJobServiceImplementation implements ApplyJobService
{
	@Autowired
	private ApplyJobRepository applyJobRepository;  
	
	@Autowired	
	private StudentRepository studentRepository;
	
	@Autowired
	private JobRepository jobRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	
	@Override
	public ApplyJobDTO addJob(ApplyJobDTO applyjob) {
		// TODO Auto-generated method stub
		ApplyJobEntity applyJobEntity= this.modelMapper.map(applyjob, ApplyJobEntity.class);
		ApplyJobEntity savedApplyJob =this.applyJobRepository.save(applyJobEntity);
	 	
		return this.modelMapper.map(savedApplyJob, ApplyJobDTO.class);
	}

	@Override
	public List<ApplyJobDTO> getAllApplyJob() {
		// TODO Auto-generated method stub
		List<ApplyJobEntity> applyJobsList = this.applyJobRepository.findAll();
		List<ApplyJobDTO>  applyJobsDTOList = applyJobsList.stream().map(applyJobs->this.
				modelMapper.map(applyJobs, ApplyJobDTO.class))
				.collect(Collectors.toList());
		return applyJobsDTOList;
	
	}

	@Override
	public ApplyJobDTO getApplyJobById(int applyJobId) {
		// TODO Auto-generated method stub
		if(this.applyJobRepository.existsById(applyJobId)) 
		{
			ApplyJobEntity applyJobEntity = this.applyJobRepository.findById(applyJobId).get();
			
			return this.modelMapper.map(applyJobEntity, ApplyJobDTO.class);
		}
		else
		{
			throw new ResourceNotFoundException("applyJobs","ApplyJobId", applyJobId);
		}
	}

	@Override
	public List<ApplyJobDTO> getApplyJobByStudentId(int studentId) {
		// TODO Auto-generated method stub
		if(this.studentRepository.existsById(studentId))
	    {
	    	//StudentEntity updatedStudent=this.studentRepository.save(studentObj).get();
	    	List<ApplyJobEntity> applyJobsList =this.applyJobRepository.getAllApplyJobByStudentId(studentId);
	    	 
	    	List<ApplyJobDTO> applyJobDTOList =applyJobsList.stream()
	    	   .map(applyJob ->this.modelMapper.map(applyJob, ApplyJobDTO.class))
	    	   .collect(Collectors.toList());
	    	
	    	
	    	return applyJobDTOList;
	    	
	    	
	    	}
	    else
	    {
	    	throw new ResourceNotFoundException("Student","StudentID",studentId);
	    }
	
	}

	@Override
	public List<ApplyJobDTO> getApplyJobByJobId(int jobId) {
		// TODO Auto-generated method stub
		if(this.jobRepository.existsById(jobId))
		{
		// TODO Auto-generated method stub
		List<ApplyJobEntity> applyJobsList =this.applyJobRepository.getAllApplyJobByJobId(jobId);   	 
    	List<ApplyJobDTO> applyJobDTOList =applyJobsList.stream()
    	   .map(applyJob ->this.modelMapper.map(applyJob, ApplyJobDTO.class))
    	   .collect(Collectors.toList());
    	
    	
    	return applyJobDTOList;
    	
    	
    	}
    else
    {
    	throw new ResourceNotFoundException("Job","JobID",jobId);
    }
	
	}
	

}
