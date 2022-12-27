package com.boot.serviceimplementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.entity.PlacementManagerEntity;
import com.boot.entity.StudentEntity;
import com.boot.exception.ResourceNotFoundException;
import com.boot.payload.PlacementManagerDTO;
import com.boot.payload.StudentDTO;
import com.boot.repository.PlacementManagerRepository;
import com.boot.service.PlacementManagerService;
@Service
public class PlacementManagerServiceImplementation implements PlacementManagerService
{
	@Autowired
    private PlacementManagerRepository placementmanagerRepository;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public PlacementManagerDTO addplacementmanager(PlacementManagerDTO placementmanager) {
		// TODO Auto-generated method stub
	PlacementManagerEntity placementManagerEntity = this.modelMapper.map(placementmanager, PlacementManagerEntity.class);
	
	PlacementManagerEntity savedPlacementManagerEntity = this.placementmanagerRepository.save(placementManagerEntity);
		return this.modelMapper.map(savedPlacementManagerEntity,PlacementManagerDTO.class );
	}

	@Override
	public List<PlacementManagerDTO> getAllplacementmanagerList() {
		List<PlacementManagerEntity> placementmanagerList =this.placementmanagerRepository.findAll();
		List<PlacementManagerDTO>  placementmanagerListDto = placementmanagerList.stream().map(placementmanager->this.modelMapper.map(placementmanager, PlacementManagerDTO.class))
				.collect(Collectors.toList());
		return placementmanagerListDto;
		
		// TODO Auto-generated method stub
	
	}

	@Override
	public PlacementManagerDTO getPlacementManagerById(int managerId) {
		// TODO Auto-generated method stub
		PlacementManagerEntity placementmanagerObj = this.placementmanagerRepository
				.findById(managerId).orElseThrow(()-> new ResourceNotFoundException("placementmanager","managerId",managerId));
				return this.modelMapper.map(placementmanagerObj, PlacementManagerDTO.class);

	}

	@Override
	public void deletePlacementManagerById(int managerId) {
		// TODO Auto-generated method stub
		if(this.placementmanagerRepository.existsById(managerId)) 
		{
			this.placementmanagerRepository.deleteById(managerId);
			
		}
		else
		{
			throw new ResourceNotFoundException("PlacementManager","ManagerId", managerId);
		}
		
	}

	@Override
	public PlacementManagerDTO updatePlacementManagerByID(PlacementManagerDTO placementmanager, int managerId) {
		// TODO Auto-generated method stub
		if(this.placementmanagerRepository.existsById(managerId)) 
		{
			PlacementManagerEntity placementmanagerObj = this.modelMapper.map(placementmanager,PlacementManagerEntity.class);
			PlacementManagerEntity updatedPlacementManager= this.placementmanagerRepository.save(placementmanagerObj);
			
			return this.modelMapper.map(updatedPlacementManager, PlacementManagerDTO.class);
		}
		else
		{
			throw new ResourceNotFoundException("PlacementManager","ManagerId", managerId);
		}
		
	}

}
