package com.boot.service;

import java.util.List;

import com.boot.payload.CompanyDTO;


public interface CompanyService
{
	 public CompanyDTO addcompany(CompanyDTO company);
	  
	  public List<CompanyDTO> getAllcompanyList();
	  
	  public CompanyDTO getCompanyById(int companyId);
	  
	  public void deleteCompanyById(int companyId);
	  
	  public CompanyDTO updateCompanyByID(CompanyDTO company, int companyId);
	  
}
