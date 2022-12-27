package com.boot.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class PlacementManagerEntity 
{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private int managerId;
	
	@NotEmpty(message="Manager name can not be empty")
	@Column(nullable = false)
	@Size(min=5,max=20,message ="Manager name must be minimum 5 charachters and maximum 20")
	private String managerName;
	
	@NotEmpty(message="Manager name can not be empty")
	@Column(nullable = false,unique=true)
	@Size(min=5,max=20,message ="Manager name must be minimum 5 charachters and maximum 20")
	private String placementManagerUserName;
	
	@Column(nullable=false)
    @NotNull(message ="Manager password can not be empty")
    @Size(min=2,max=10,message ="Manager passward must be minimum 2 charachters and maximum 10")
    private String placementManagerPassword;
    
    
	@Email(message ="Email is not valid ")
	@NotEmpty(message = "Email can not be empty")
	@Column(nullable=false)
    private String managerEmail;
    
    @Column(nullable=false)
    @NotNull(message ="Manager contact no can not be empty")
//    @Min(message = "Minimum digit of contact no should be 10",value=10)
//    @Max(message = "Maximum digit of contact no should be 10",value=10)
    @Size(min=10,max=10,message ="Manager contact no must be minimum 10 diit and maximum 10")
    private String managerContactNumber;
    
    
    @JsonIgnore 
    @OneToMany(mappedBy = "placementManager", cascade = CascadeType.ALL)  
    private List<CompanyEntity> companyList=new ArrayList<>();

    
}
