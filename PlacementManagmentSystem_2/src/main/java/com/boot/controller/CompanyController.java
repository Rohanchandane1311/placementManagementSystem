package com.boot.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.exception.ApiResponse;
import com.boot.payload.CompanyDTO;
import com.boot.service.CompanyService;

@RestController
@RequestMapping("/company")
@CrossOrigin("*")
public class CompanyController
{
	@Autowired
	private CompanyService companyService;
	
	@PostMapping// end point to add new record
	@RequestMapping(value="/",method=RequestMethod.POST)//end point or mapping method
	public ResponseEntity<CompanyDTO> addCompany(@Valid @RequestBody CompanyDTO company)
	{
		//ResponseEntity
	
		CompanyDTO addCompany = this.companyService.addcompany(company);
		
		
   
		return new ResponseEntity<CompanyDTO>(addCompany,HttpStatus.CREATED);
		//return addCompany;
		
	}
	
	@GetMapping("/")//end point to featch all student record
	public ResponseEntity<List<CompanyDTO>> getAllCompanys()
	{
		List<CompanyDTO> allcompanyList = this.companyService.getAllcompanyList();
		return new ResponseEntity<List<CompanyDTO>>(allcompanyList,HttpStatus.OK);
		
   }
   
	@GetMapping("/{companyId}")
	public ResponseEntity<CompanyDTO> getCompany(@PathVariable("companyId") int companyId)
	{
		CompanyDTO companyObj = this.companyService.getCompanyById(companyId);
		return new ResponseEntity<CompanyDTO>(companyObj,HttpStatus.OK);
	}
	
	@PutMapping("/{companyId}")
	public ResponseEntity<CompanyDTO> updateCompanyById(@Valid @RequestBody CompanyDTO company,@PathVariable("companyId") int companyId)
	{
		CompanyDTO updatedCompany = this.companyService.updateCompanyByID(company, companyId);
		return new ResponseEntity<CompanyDTO>(updatedCompany,HttpStatus.OK);
	}

	@DeleteMapping("/{companyId}")
	public ResponseEntity<ApiResponse> deleteCompany(@PathVariable("companyId") int companyId)
	{
		this.companyService.deleteCompanyById(companyId);
		
		ApiResponse response = new ApiResponse();//api is used to handle custum message 
		
		response.setMessage("Company record deleted companyId "+companyId);
		response.setStatus(true);
		
		return new ResponseEntity<ApiResponse>(response,HttpStatus.OK);
		
		
	}

}
