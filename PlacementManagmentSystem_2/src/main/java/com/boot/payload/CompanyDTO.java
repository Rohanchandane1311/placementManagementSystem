package com.boot.payload;

import java.util.ArrayList;
import java.util.List;

import com.boot.entity.PlacementManagerEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class CompanyDTO 
{
    private int companyId;
    
    private String companyName;
    
    private String companyDescription;
    
    private String companyAddress;
    
    private String companyEmail;
    
   
    private PlacementManagerDTO placementManager;
    
    @JsonIgnore
    private List<JobDTO> jobList=new ArrayList<>();
}
