package com.boot.payload;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

import com.boot.entity.CompanyEntity;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class PlacementManagerDTO 
{
   private int managerId;
   
   private String managerName;
   
   private String placementManagerUserName;
   
   private String placementManagerPassword;
   
   private String managerContactNumber;
   
   private String managerEmail;
   
   @JsonIgnore
   private List<CompanyDTO> companyList=new ArrayList<>();
}
