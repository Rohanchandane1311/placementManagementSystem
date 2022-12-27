package com.boot.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@Entity
public class JobEntity
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int jobId;
	
	@NotEmpty(message="Job name can not be empty")
	@Column(nullable = false,length = 20)
	@Size(min=10,max=20,message ="Job name must be minimum 10 charachters and maximum 20")
	private String jobName;
	
	@Column(nullable=false,length = 20)
    @NotEmpty(message ="Job Description can not be empty")
    @Size(min=10,max=20,message ="Job Description must be minimum 10 charachters and maximum 20")
    private String jobDescription;
    
	@Column(nullable=false)
    @NotNull(message ="Job salary can not be empty")
    @Min(message = "Minimum salary of student  should be 10",value=50000)
    @Max(message = "Maximum salary of student  should be 30",value=5000000)
    private int jobSalary;
	
	@JsonIgnore
    @OneToMany(mappedBy ="job" ,cascade = CascadeType.ALL)
    private List<ApplyJobEntity> jobList=new ArrayList<>();
	
	@ManyToOne
    @JoinColumn(name="cid")
    private CompanyEntity company;
    
    
    

}
