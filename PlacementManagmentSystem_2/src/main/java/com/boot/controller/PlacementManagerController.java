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
import com.boot.payload.PlacementManagerDTO;
import com.boot.service.PlacementManagerService;

@RestController
@RequestMapping("/placementmanager")
@CrossOrigin("*")
public class PlacementManagerController
{
	@Autowired
	private PlacementManagerService placementmanagerService;
	
	@PostMapping// end point to add new record
	@RequestMapping(value="/",method=RequestMethod.POST)//end point or mapping method
	public ResponseEntity<PlacementManagerDTO> addPlacementManager(@Valid @RequestBody PlacementManagerDTO placementmanager)
	{
		//ResponseEntity
	
		PlacementManagerDTO addPlacementManager = this.placementmanagerService.addplacementmanager(placementmanager);
		
		
   
		return new ResponseEntity<PlacementManagerDTO>(addPlacementManager,HttpStatus.CREATED);
		//return addStudent;
		
	}
	
	@GetMapping("/")//end point to featch all student record
	public ResponseEntity<List<PlacementManagerDTO>> getAllPlacementManagers()
	{
	    List<PlacementManagerDTO> allplacementmanagerList = this.placementmanagerService.getAllplacementmanagerList();
		return new ResponseEntity<List<PlacementManagerDTO>>(allplacementmanagerList,HttpStatus.OK);
		
   }
   
	@GetMapping("/{managerId}")
	public ResponseEntity<PlacementManagerDTO> getPlacementManager(@PathVariable("managerId") int managerId)
	{
		PlacementManagerDTO placementmanagerObj = this.placementmanagerService.getPlacementManagerById(managerId);
		return new ResponseEntity<PlacementManagerDTO>(placementmanagerObj,HttpStatus.OK);
	}
	
	@PutMapping("/{managerId}")
	public ResponseEntity<PlacementManagerDTO> updatePlacementManagerById(@Valid @RequestBody PlacementManagerDTO placementmanager,@PathVariable("managerId") int managerId)
	{
		PlacementManagerDTO updatedPlacementManager = this.placementmanagerService.updatePlacementManagerByID(placementmanager, managerId);
		return new ResponseEntity<PlacementManagerDTO>(updatedPlacementManager,HttpStatus.OK);
	}

	@DeleteMapping("/{managerId}")
	public ResponseEntity<ApiResponse> deletePlacementManager(@PathVariable("managerId") int managerId)
	{
		this.placementmanagerService.deletePlacementManagerById(managerId);
		
		ApiResponse response = new ApiResponse();//api is used to handle custum message 
		
		response.setMessage("Manager record deleted managerId "+managerId);
		response.setStatus(true);
		
		return new ResponseEntity<ApiResponse>(response,HttpStatus.OK);
		
		
	}

}
