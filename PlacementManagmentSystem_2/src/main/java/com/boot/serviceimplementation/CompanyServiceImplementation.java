package com.boot.serviceimplementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.entity.CompanyEntity;
import com.boot.exception.ResourceNotFoundException;
import com.boot.payload.CompanyDTO;
import com.boot.repository.CompanyRepository;
import com.boot.service.CompanyService;

@Service
public class CompanyServiceImplementation implements CompanyService
{
	@Autowired
    private CompanyRepository companyRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public CompanyDTO addcompany(CompanyDTO company) {
		// TODO Auto-generated method stub
		CompanyEntity companyEntity = this.modelMapper.map(company, CompanyEntity.class);
		
		CompanyEntity savedCompanyEntity = this.companyRepository.save(companyEntity);
		
		return this.modelMapper.map(savedCompanyEntity, CompanyDTO.class);
		
	}

	@Override
	public List<CompanyDTO> getAllcompanyList() {
		// TODO Auto-generated method stub
		List<CompanyEntity> companyList =this.companyRepository.findAll();
		List<CompanyDTO> companyListDto = companyList.stream().map(company->this.modelMapper.map(company, CompanyDTO.class))
				.collect(Collectors.toList());
		return companyListDto;
		
	}

	@Override
	public CompanyDTO getCompanyById(int companyId) {
		// TODO Auto-generated method stub
		CompanyEntity companyObj = this.companyRepository
				.findById(companyId).orElseThrow(()-> new ResourceNotFoundException("company","companyId",companyId));
				return this.modelMapper.map(companyObj, CompanyDTO.class);
	}

	@Override
	public void deleteCompanyById(int companyId) {
		// TODO Auto-generated method stub
		if(this.companyRepository.existsById(companyId)) 
		{
			this.companyRepository.deleteById(companyId);
			
		}
		else
		{
			throw new ResourceNotFoundException("Company","CompanyId", companyId);
		}
		
		
	}

	@Override
	public CompanyDTO updateCompanyByID(CompanyDTO company, int companyId) {
		// TODO Auto-generated method stub
		if(this.companyRepository.existsById(companyId)) 
		{
	     	CompanyEntity companyObj = this.modelMapper.map(company,CompanyEntity.class);
			CompanyEntity updatedCompany= this.companyRepository.save(companyObj);
			
			return this.modelMapper.map(updatedCompany, CompanyDTO.class);
		}
		else
		{
			throw new ResourceNotFoundException("Company","CompanyId", companyId);
		}
	}
	
}
