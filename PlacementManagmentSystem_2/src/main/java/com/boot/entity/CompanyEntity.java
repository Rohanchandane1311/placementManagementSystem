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
public class CompanyEntity
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int companyId;
	
	@NotEmpty(message="Company name can not be empty")
	@Column(nullable = false)
	@Size(min=2,max=10,message ="Company name must be minimum 2 charachters and maximum 10")
	private String companyName;
    
	@Email(message ="Email is not valid ")
	@NotEmpty(message = "Email can not be empty")
    @Column(nullable=false)
    private String companyEmail;
	
	@Column(nullable=false)
    @NotEmpty(message ="Company Description can not be empty")
    @Size(min=5,max=20,message ="Company Description must be minimum 5 charachters and maximum 20")
    private String companyDescription;
    
    @Column(nullable=false)
    @NotNull(message ="Company Address can not be empty")
    @Size(min=2,max=10,message ="Company Address must be minimum 2 charachters and maximum 10")
    private String companyAddress;
    
    
    @ManyToOne
    @JoinColumn(name="pmi")
    private PlacementManagerEntity placementManager;
    
    @JsonIgnore 
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)  
    private List<JobEntity> jobList=new ArrayList<>();

    
    
  }
