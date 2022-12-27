package com.boot.payload;

import java.util.ArrayList;
import java.util.List;

import com.boot.entity.ApplyJobEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor

public class JobDTO 
{
    private int jobId;
    
    private String jobName;
    
    private String jobDescription;
    
    private int jobSalary;
    
    @JsonIgnore
    private List<ApplyJobDTO> jobList=new ArrayList<>();
    
     
    private CompanyDTO company;

    
}
